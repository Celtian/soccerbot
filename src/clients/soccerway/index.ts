import parse from 'node-html-parser';
import { coerceCountry, coerceDate, coercePositionGroup, sleep } from '../../helpers';
import { coerceJerseyNumber, coerceMinutesPlayed } from '../../helpers/number';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient, UserAgents } from '../shared';

const BASE_URL = 'https://www.soccerway.com';

export class SoccerBotSoccerwayClient extends SoccerBotClient {
  protected userAgents: UserAgents[] = [
    UserAgents.Iphone,
    UserAgents.Ipad,
    UserAgents.Ipod,
    UserAgents.Android,
    UserAgents.AndroidSamsung,
    UserAgents.AndroidLg
  ];

  constructor(private sleepMs: number = 500) {
    super();
  }

  public leagueUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/${id}/standings/overall/`;
  }

  public teamUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/team/${id}/squad/`;
  }

  public playerUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/player/${id}/`;
  }

  public async league(id: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const page = await this.fetchPage(this.leagueUrl(id));
      const feed = page.match(/data:\s*`(?<data>SA÷[^`]+)`/s)?.groups?.data;
      if (!feed) {
        throw new Error('Soccerway league feed was not found');
      }

      const teams = new Map<string, SoccerBotTeam>();
      for (const event of feed.split('¬~AA÷').slice(1)) {
        const fields = new Map<string, string>();
        for (const field of event.split('¬')) {
          const separator = field.indexOf('÷');
          if (separator > 0) {
            fields.set(field.slice(0, separator), field.slice(separator + 1));
          }
        }

        for (const [idKey, nameKey, slugKey] of [
          ['PX', 'AE', 'WU'],
          ['PY', 'AF', 'WV']
        ]) {
          const teamId = fields.get(idKey);
          const name = fields.get(nameKey);
          const slug = fields.get(slugKey);
          if (teamId && name && slug && !teams.has(teamId)) {
            teams.set(teamId, { id: `${slug}/${teamId}`, name });
          }
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

  public async team(id: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = parse(await this.fetchPage(this.teamUrl(id)));
      const items = html.querySelectorAll('#overall-all-table .lineupTable__row');
      const list: SoccerBotPlayer[] = [];
      for (const item of items) {
        const link = item.querySelector('.lineupTable__cell--name');
        const id = link
          .getAttribute('href')
          .trim()
          .match(/^\/player\/(?<id>[^/]+\/[^/]+)\/?$/).groups.id;
        const jerseyNumber = coerceJerseyNumber(item.querySelector('.lineupTable__cell--jersey')?.text?.trim());
        const minutesPlayed = coerceMinutesPlayed(
          item.querySelector('.lineupTable__cell--minutesPlayed')?.text?.trim()
        );
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const player = await this.player(id);
        list.push({
          id,
          jerseyNumber,
          minutesPlayed,
          ...(player.ok ? player.data : {})
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
      const url = this.playerUrl(id);
      const html = parse(await this.fetchPage(url));
      const data = html.querySelector('#player-profile-heading');
      const name = data.querySelector('h2')?.text?.trim();
      const [firstName, ...lastNameParts] = name.split(/\s+/);
      const lastName = lastNameParts.join(' ');
      const age = data
        .querySelectorAll('.playerInfoItem')
        .find((item) => item.text.trim().startsWith('Age:'))
        ?.text?.trim();
      return {
        ok: true,
        data: {
          id,
          name,
          firstName,
          lastName,
          country: coerceCountry(data.querySelector('[itemprop="name"]')?.text?.trim(), SoccerBotProvider.SOCCERWAY),
          birthdate: coerceDate(age, SoccerBotProvider.SOCCERWAY),
          position: coercePositionGroup(data.querySelector('.playerTeam > span')?.text?.trim())
        }
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      };
    }
  }
}
