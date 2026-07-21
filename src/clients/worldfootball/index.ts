import { connect } from 'node:http2';
import parse, { HTMLElement } from 'node-html-parser';
import {
  coerceCountry,
  coerceDate,
  coerceHeight,
  coerceJerseyNumber,
  coercePositionDetail,
  coercePositionGroup,
  coerceWeight
} from '../../helpers';
import {
  SoccerBotPlayer,
  SoccerBotPositionGroup,
  SoccerBotProvider,
  SoccerBotResponse,
  SoccerBotTeam
} from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://www.worldfootball.net';
const FALLBACK_BASE_URL = 'https://www.livefutbol.com';
const FALLBACK_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36';

export class SoccerBotWorldFootballClient extends SoccerBotClient {
  public leagueUrl(id: string, season?: string): string {
    void season;
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/competition/${id}/`;
  }

  public teamUrl(id: string, season?: string): string {
    void season;
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/teams/${id}/squad/`;
  }

  public playerUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/person/${id}/`;
  }

  public async league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = parse(await this.fetchWorldFootballPage(this.leagueUrl(id, season)));
      if (!html.querySelector('.hs-page-header--competition') || !html.querySelector('.module-standing')) {
        throw new Error('WorldFootball competition standings were not found');
      }

      const teams = new Map<string, SoccerBotTeam>();
      for (const row of html.querySelectorAll('.module-standing tr.standing')) {
        const link = row.querySelector('.team-name a');
        const teamId = this.entityId(link, 'teams', 'te');
        const name = link?.text?.trim();
        if (teamId && name && !teams.has(teamId)) {
          teams.set(teamId, { id: teamId, name });
        }
      }

      return {
        ok: true,
        data: [...teams.values()]
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      };
    }
  }

  public async team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = parse(await this.fetchWorldFootballPage(this.teamUrl(id, season)));
      const squad = html.querySelector('.hs-block.hs-persons > table');
      if (!html.querySelector('.hs-page-header--team') || !squad) {
        throw new Error('WorldFootball squad was not found');
      }

      const list: SoccerBotPlayer[] = [];
      let position: SoccerBotPositionGroup;
      for (const row of squad.querySelectorAll('tr')) {
        const role = row.querySelector('th.role')?.text?.trim();
        if (role) {
          position = coercePositionGroup(role);
          continue;
        }

        const link = row.querySelector('.person-name a');
        const playerId = this.entityId(link, 'person', 'pe');
        if (!playerId || !position) {
          continue;
        }

        list.push({
          id: playerId,
          name: link.text.trim(),
          jerseyNumber: coerceJerseyNumber(row.querySelector('.team_person-shirtnumber')?.text?.trim()),
          position,
          birthdate: coerceDate(row.querySelector('.person-birthday')?.text?.trim(), SoccerBotProvider.WORLDFOOTBALL),
          country: coerceCountry(this.countryId(row), SoccerBotProvider.WORLDFOOTBALL)
        });
      }

      return {
        ok: true,
        data: list
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      };
    }
  }

  public async player(id: string): Promise<SoccerBotResponse<SoccerBotPlayer>> {
    try {
      const html = parse(await this.fetchWorldFootballPage(this.playerUrl(id)));
      const header = html.querySelector('.hs-page-header--person');
      const profile = html.querySelector('.hs-profile--person');
      if (!header || !profile) {
        throw new Error('WorldFootball person profile was not found');
      }

      const firstName = header.querySelector('.person-firstname')?.text?.trim();
      const lastName = header.querySelector('.person-lastname')?.text?.trim();
      const name = [firstName, lastName].filter(Boolean).join(' ') || undefined;
      const position = profile.querySelector('dd.person-position')?.text?.trim();

      return {
        ok: true,
        data: {
          id,
          name,
          firstName,
          lastName,
          jerseyNumber: coerceJerseyNumber(html.querySelector('table tr.entry .team_person-shirtnumber')?.text?.trim()),
          position: coercePositionGroup(position),
          positionDetail: coercePositionDetail(position),
          birthdate: coerceDate(
            profile.querySelector('dd.person-birthday')?.text?.trim(),
            SoccerBotProvider.WORLDFOOTBALL
          ),
          height: coerceHeight(profile.querySelector('dd.person-height')?.text?.trim()),
          weight: coerceWeight(profile.querySelector('dd.person-weight')?.text?.trim()),
          country: coerceCountry(this.countryId(profile), SoccerBotProvider.WORLDFOOTBALL)
        }
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      };
    }
  }

  private async fetchWorldFootballPage(url: string): Promise<string> {
    if (!url) {
      throw new Error('WorldFootball URL is required');
    }

    const page = await this.fetchPage(url, true);
    if (!this.isBlockedPage(page)) {
      return page;
    }

    const fallbackUrl = url.replace(BASE_URL, FALLBACK_BASE_URL);
    const fallbackPage = await this.fetchPageHttp2(fallbackUrl);
    if (this.isBlockedPage(fallbackPage)) {
      throw new Error(`WorldFootball and fallback requests failed for url: ${url}`);
    }
    return fallbackPage;
  }

  private isBlockedPage(page: string): boolean {
    if (!page || page === 'Error') {
      return true;
    }
    const content = page.toLowerCase();
    return content.includes('<title>just a moment...</title>') || content.includes('cf-mitigated');
  }

  private fetchPageHttp2(url: string): Promise<string> {
    const target = new URL(url);
    const client = connect(target.origin);

    return new Promise((resolve, reject) => {
      let body = '';
      let status = 0;
      let complete = false;

      const finish = (error?: Error): void => {
        if (complete) {
          return;
        }
        complete = true;
        client.close();
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      };

      client.on('error', (error) => finish(error));

      const request = client.request({
        ':method': 'GET',
        ':path': `${target.pathname}${target.search}`,
        ':scheme': target.protocol.slice(0, -1),
        ':authority': target.host,
        'user-agent': FALLBACK_USER_AGENT,
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9',
        'accept-encoding': 'identity',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1'
      });

      request.setEncoding('utf8');
      request.on('response', (headers) => {
        status = Number(headers[':status']);
      });
      request.on('data', (chunk: string) => {
        body += chunk;
      });
      request.on('end', () => {
        if (status < 200 || status >= 300) {
          finish(new Error(`Bad response ${status} for url: ${url}`));
        } else {
          finish();
        }
      });
      request.on('error', (error) => finish(error));
      request.setTimeout(30000, () => {
        request.close();
        finish(new Error(`Request timed out for url: ${url}`));
      });
      request.end();
    });
  }

  private entityId(link: HTMLElement, entity: 'teams' | 'person', prefix: 'te' | 'pe'): string {
    return link
      ?.getAttribute('href')
      ?.trim()
      ?.match(new RegExp(`^/${entity}/(?<id>${prefix}\\d+/[^/]+)/`))?.groups?.id;
  }

  private countryId(element: HTMLElement): string {
    const country =
      element.querySelector('dd.country-name') ||
      element.querySelector('td.country-name') ||
      element.querySelector('.country-name');
    return country
      ?.querySelector('a')
      ?.getAttribute('href')
      ?.trim()
      ?.match(/^\/cy(?<id>\d+)\//)?.groups?.id;
  }
}
