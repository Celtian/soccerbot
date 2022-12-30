import parse from 'node-html-parser';
import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { coerceFoot } from '../../helpers/foot';
import { coerceHeight, coerceJerseyNumber, coerceMinutesPlayed, coerceWeight } from '../../helpers/number';
import { coercePositionGroup } from '../../helpers/position';
import { sleep } from '../../helpers/shared';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://int.soccerway.com';

export class SoccerBotSoccerwayClient extends SoccerBotClient {
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
      const html = parse(await this.fetchPage(this.leagueUrl(id, season)));
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
        const jerseyNumber = coerceJerseyNumber(item.querySelector('td.shirtnumber').text.trim());
        const minutesPlayed = coerceMinutesPlayed(item.querySelector('td.game-minutes').text.trim());
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
      const html = parse(await this.fetchPage(this.playerUrl(id)));
      const data = html.querySelector('.block_player_passport > div > div > div.yui-u.first > div > dl');

      const firstName = data.querySelector('dd[data-first_name="first_name"]').text.trim();
      const lastName = data.querySelector('dd[data-last_name="last_name"]').text.trim();

      return {
        ok: true,
        data: {
          id,
          name: `${firstName} ${lastName}`,
          firstName,
          lastName,
          country: coerceCountry(
            data.querySelector('dd[data-nationality="nationality"]').text.trim(),
            SoccerBotProvider.SOCCERWAY
          ),
          birthdate: coerceDate(
            data.querySelector('dd[data-date_of_birth="date_of_birth"]').text.trim(),
            SoccerBotProvider.SOCCERWAY
          ),
          position: coercePositionGroup(data.querySelector('dd[data-position="position"]').text.trim()),
          height: coerceHeight(data.querySelector('dd[data-height="height"]').text.trim()),
          weight: coerceWeight(data.querySelector('dd[data-weight="weight"]').text.trim()),
          foot: coerceFoot(data.querySelector('dd[data-foot="foot"]').text.trim())
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
