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
      const html = await this.fetchPage(this.leagueUrl(id));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#content > div > div > table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td > a');
        list.push({
          id: this.getAttributeAndTrim(link, 'href').match(/^\/tym\/(?<id>\d+)(\/)?$/).groups.id,
          name: this.getTextAndTrim(link)
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
      const html = await this.fetchPage(this.teamUrl(id));
      const virtualNode = this.nodeDOM(html);
      const page = this.selectArray(virtualNode, '#content > div > div > h3 > a')[0];
      const list: SoccerBotPlayer[] = [];
      if (page) {
        const clubId = this.getAttributeAndTrim(page, 'href').match(/^\/klub\/(?<id>\d+)(\/)?$/).groups.id;
        if (clubId) {
          await sleep(this.sleepMs); // sleep for a moment because of rare limit
          const clubHtml = await this.fetchPage(this.clubUrl(clubId));
          const clubVirtualNode = this.nodeDOM(clubHtml);
          const items = this.selectArray(clubVirtualNode, '#content > div > div > table > tbody > tr');
          for (const item of items) {
            const link = item.querySelector('td:nth-child(2) > a');
            list.push({
              id: this.getAttributeAndTrim(link, 'href').match(/^\/hrac\/(?<id>\d+)(\/)?$/).groups.id,
              name: this.getTextAndTrim(link),
              jerseyNumber: coerceJerseyNumber(this.getTextAndTrim(item.querySelector('td:nth-child(1)'))),
              position: coercePositionGroup(this.getTextAndTrim(item.querySelector('td:nth-child(4)')))
            });
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