import parse from 'node-html-parser';
import { coerceCountry, coerceDate, coerceFoot, coercePositionGroup, sleep } from '../../helpers';
import { coerceHeight, coerceJerseyNumber, coerceMinutesPlayed, coerceWeight } from '../../helpers/number';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient, UserAgents } from '../shared';

const BASE_URL = 'https://int.soccerway.com';

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

  public leagueUrl(id: string, season: string): string {
    if (!id || !season) {
      return undefined;
    }
    return `${BASE_URL}/national/country-slug/team-slug/${season}/regular-season/${id}/tables/`;
  }

  public teamUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/teams/country-slug/team-slug/${id}/squad/`;
  }

  public playerUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/players/player-slug/${id}/`;
  }

  public async league(id: string, season: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const url = this.leagueUrl(id, season);
      const html = parse(await this.fetchPage(url));
      const items = html.querySelectorAll('table[data-round_id].detailed-table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td.text.team.large-link > a');
        list.push({
          id: link
            .getAttribute('href')
            .trim()
            .match(/^(.*)\/(?<id>\d+)(\/)?$/).groups.id,
          name: link.text.trim()
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

  public async team(id: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = parse(await this.fetchPage(this.teamUrl(id)));
      const items = html.querySelectorAll('table[data-season_id] > tbody > tr');
      const list: SoccerBotPlayer[] = [];
      for (const item of items) {
        const link = item.querySelector('td.name.large-link > a');
        const id = link
          .getAttribute('href')
          .trim()
          .match(/^(.*)\/(?<id>\d+)(\/)?$/).groups.id;
        const jerseyNumber = coerceJerseyNumber(item.querySelector('td.shirtnumber')?.text?.trim());
        const minutesPlayed = coerceMinutesPlayed(item.querySelector('td.game-minutes')?.text?.trim());
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
      const data = html.querySelector('.block_player_passport > div > div > div.yui-u.first > div.clearfix');
      const firstName = data.querySelector('[data-first_name="first_name"]')?.text?.trim();
      const lastName = data.querySelector('[data-last_name="last_name"]')?.text?.trim();
      return {
        ok: true,
        data: {
          id,
          name: `${firstName} ${lastName}`,
          firstName,
          lastName,
          country: coerceCountry(
            data.querySelector('[data-nationality="nationality"]')?.text?.trim(),
            SoccerBotProvider.SOCCERWAY
          ),
          birthdate: coerceDate(
            data.querySelector('[data-date_of_birth="date_of_birth"]')?.text?.trim(),
            SoccerBotProvider.SOCCERWAY
          ),
          position: coercePositionGroup(data.querySelector('[data-position="position"]')?.text?.trim()),
          height: coerceHeight(data.querySelector('[data-height="height"]')?.text?.trim()),
          weight: coerceWeight(data.querySelector('[data-weight="weight"]')?.text?.trim()),
          foot: coerceFoot(data.querySelector('[data-foot="foot"]')?.text?.trim())
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
