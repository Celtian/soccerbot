import parse from 'node-html-parser';
import { coerceJerseyNumber } from '../../helpers/number';
import { coercePositionGroup } from '../../helpers/position';
import { sleep } from '../../helpers/shared';
import { SoccerBotPlayer, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://fotbalunas.cz';
export class SoccerBotFotbalunasClient extends SoccerBotClient {
  constructor(private sleepMs: number = 500) {
    super();
  }

  public leagueUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/tabulky/soutez/${id}`;
  }

  public teamUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/tym/${id}`;
  }

  private clubUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/klub/${id}`;
  }

  public async league(id: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = parse(await this.fetchPage(this.leagueUrl(id)));
      const items = html.querySelectorAll('div.table-responsive > table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td > a');
        list.push({
          id: link
            .getAttribute('href')
            .trim()
            .match(/^\/tym\/(?<id>\d+)(\/)?$/).groups.id,
          name: link?.text?.trim()
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
      const page = html.querySelector('section div > div > h3 > a');
      const list: SoccerBotPlayer[] = [];
      if (page) {
        const clubId = page
          .getAttribute('href')
          .trim()
          .match(/^\/klub\/(?<id>\d+)(\/)?$/).groups.id;
        if (clubId) {
          await sleep(this.sleepMs); // sleep for a moment because of rare limit
          const clubHtml = parse(await this.fetchPage(this.clubUrl(clubId)));
          const items = clubHtml.querySelectorAll('section div > div > table tr');
          for (const item of items) {
            const link = item.querySelector('td:nth-child(2) > a');
            if (link) {
              list.push({
                id: link
                  .getAttribute('href')
                  ?.trim()
                  ?.match(/^\/hrac\/(?<id>\d+)(\/)?$/).groups.id,
                name: link?.text?.trim(),
                jerseyNumber: coerceJerseyNumber(item.querySelector('td:nth-child(1)')?.text?.trim()),
                position: coercePositionGroup(item.querySelector('td:nth-child(4)')?.text?.trim())
              });
            }
          }
        }
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
}
