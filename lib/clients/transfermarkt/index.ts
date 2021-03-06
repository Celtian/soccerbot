import { coerceCoutry, coerceDate, coerceFoot, coerceHeight, coerceJerseyNumber, coerceMarketValue, coercePositionGroup } from "../../helpers";
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from "../../shared";
import { SoccerBotClient } from "../shared";

const BASE_URL = 'https://www.transfermarkt.com';

export class SoccerBotTransfermarktClient extends SoccerBotClient {
  public leagueUrl(id: string, season?: string): string {
    if(!id) {
      return undefined
    }
    return `${BASE_URL}/slug/startseite/wettbewerb/${id}${season ? '/plus?saison_id=' + season :''}`;
  }

  public teamUrl(id: string, season?: string): string {
    if(!id) {
      return undefined
    }
    return `${BASE_URL}/slug/kader/verein/${id}/plus/1${season ? '?saison_id=' + season  : ''}`
  }

  public async league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = await this.fetchPage(this.leagueUrl(id, season));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#yw1 > table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td.hauptlink.no-border-links.show-for-small.show-for-pad > a');
        list.push({
          id: link.id,
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

  public async team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = await this.fetchPage(this.teamUrl(id, season));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#yw1 > table > tbody > tr');
      const list: SoccerBotPlayer[] = [];
      for (const item of items) {
        const link = item.querySelector('td:nth-child(2) > table > tbody > tr:nth-child(1) > td.hauptlink > div:nth-child(1) > span > a');
        const flagSrc = this.getAttributeAndTrim(item.querySelector('td:nth-child(4) > img:nth-child(1)'), 'src')
          .match(/^https:\/\/(.+)\/(?<id>\d+)\.png/);
        list.push({
          id: link.id,
          name: this.getTextAndTrim(link),
          jerseyNumber: coerceJerseyNumber(this.getTextAndTrim(item.querySelector('td:nth-child(1) > div.rn_nummer'))),
          position: coercePositionGroup(this.getTextAndTrim(item.querySelector('td:nth-child(2) > table > tbody > tr:nth-child(2) > td'))),
          birthdate: coerceDate(this.getTextAndTrim(item.querySelector('td:nth-child(3)')), SoccerBotProvider.TRANSFERMARKT),
          height: coerceHeight(this.getTextAndTrim(item.querySelector('td:nth-child(5)'))),
          foot: coerceFoot(this.getTextAndTrim(item.querySelector('td:nth-child(6)'))),
          joined: coerceDate(this.getTextAndTrim(item.querySelector('td:nth-child(7)')), SoccerBotProvider.TRANSFERMARKT),
          contractExpires: coerceDate(this.getTextAndTrim(item.querySelector('td:nth-child(9)')), SoccerBotProvider.TRANSFERMARKT),
          marketValue: coerceMarketValue(this.getTextAndTrim(item.querySelector('td:nth-child(10)'))),
          country: coerceCoutry(flagSrc && flagSrc.groups ? flagSrc.groups.id : undefined, SoccerBotProvider.TRANSFERMARKT)
        })
      }
      return {
        ok: true,
        data: list
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      }
    }
  }
}
