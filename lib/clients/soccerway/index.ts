import { coerceCoutry, coerceDate, coerceFoot, coerceHeight, coerceJerseyNumber, coerceMinutesPlayed, coercePositionGroup, coerceWeight, sleep } from "../../helpers";
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from "../../shared";
import { SoccerBotClient } from "../shared";

const BASE_URL = 'https://int.soccerway.com';

export class SoccerBotSoccerwayClient extends SoccerBotClient {
  constructor(private sleepMs: number = 500) {
    super();
  }

  public leagueUrl(id: string, season: string): string {
    if(!id || !season) {
      return undefined;
    }
    return `${BASE_URL}/national/country-slug/team-slug/${season}/regular-season/${id}/tables/`;
  }

  public teamUrl(id: string): string {
    if(!id) {
      return undefined;
    }
    return `${BASE_URL}/teams/country-slug/team-slug/${id}/squad/`;
  }

  public playerUrl(id: string): string {
    if(!id) {
      return undefined;
    }
    return `${BASE_URL}/players/player-slug/${id}/`;
  }

  public async league(id: string, season: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = await this.fetchPage(this.leagueUrl(id, season));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode,'#page_competition_1_block_competition_tables_10_block_competition_league_table_1_table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td.text.team.large-link > a');
        list.push({
          id: this.getAttributeAndTrim(link, 'href').match(/^(.*)\/(?<id>\d+)(\/)?$/).groups.id,
          name: this.getTextAndTrim(link)
        });
      }
      return {
        ok: true,
        data: list
      }
    } catch (error) {
      return {
        ok: false,
        errors: error
      }
    }
  }

  public async team(id: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = await this.fetchPage(this.teamUrl(id));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#page_team_1_block_team_squad_6-table > tbody > tr');
      const list: SoccerBotPlayer[] = [];
      for (const item of items) {
        const link = item.querySelector('td.name.large-link > a');
        const id = this.getAttributeAndTrim(link, 'href').match(/^(.*)\/(?<id>\d+)(\/)?$/).groups.id;
        const jerseyNumber = coerceJerseyNumber(this.getTextAndTrim(item.querySelector('td.shirtnumber')));
        const minutesPlayed = coerceMinutesPlayed(this.getTextAndTrim(item.querySelector('td.game-minutes')));
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
      }
    } catch (error) {
      return {
        ok: false,
        errors: error
      }
    }
  }

  public async player(id: string): Promise<SoccerBotResponse<SoccerBotPlayer>> {
    try {
      const html = await this.fetchPage(this.playerUrl(id));
      const virtualNode = this.nodeDOM(html);
      const data: HTMLTableRowElement = virtualNode.querySelector('#page_player_1_block_player_passport_3 > div > div > div.yui-u.first > div > dl');

      const firstName = this.getTextAndTrim(data.querySelector('dd[data-first_name="first_name"]'));
      const lastName = this.getTextAndTrim(data.querySelector('dd[data-last_name="last_name"]'));

      return {
        ok: true,
        data: {
          id,
          name: `${firstName} ${lastName}`,
          firstName,
          lastName,
          country: coerceCoutry(this.getTextAndTrim(data.querySelector('dd[data-nationality="nationality"]')), SoccerBotProvider.SOCCERWAY),
          birthdate: coerceDate(this.getTextAndTrim(data.querySelector('dd[data-date_of_birth="date_of_birth"]')), SoccerBotProvider.SOCCERWAY),
          position: coercePositionGroup(this.getTextAndTrim(data.querySelector('dd[data-position="position"]'))),
          height: coerceHeight(this.getTextAndTrim(data.querySelector('dd[data-height="height"]'))),
          weight: coerceWeight(this.getTextAndTrim(data.querySelector('dd[data-weight="weight"]'))),
          foot: coerceFoot(this.getTextAndTrim(data.querySelector('dd[data-foot="foot"]')))
        }
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      }
    }
  }
}
