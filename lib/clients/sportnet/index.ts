import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { sleep } from '../../helpers/shared';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://sportnet.sme.sk';

export class SoccerBotSportnetClient extends SoccerBotClient {
  constructor(private sleepMs: number = 500) {
    super();
  }

  public leagueUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/futbalnet/z/${id}/tabulky/`;
  }

  public teamUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/futbalnet/k/${id}/hraci/`;
  }

  public playerUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `https://api.futbalnet.sk/persons/${id}`;
  }

  public async league(id: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = await this.fetchPage(this.leagueUrl(id));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, 'table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td:nth-child(3) > a');
        list.push({
          id: this.getAttributeAndTrim(link, 'href').match(/^\/futbalnet\/k\/\b(?<id>.*)\b(\/)?$/).groups.id,
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
      const links = this.selectArray(virtualNode, 'div:nth-child(2) > div.dropdown-body > a');
      const list: SoccerBotPlayer[] = [];
      const playerIds = new Set<string>();
      for (const link of links) {
        const href = this.getAttributeAndTrim(link, 'href');
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const htmlParams = await this.fetchPage(BASE_URL + href);
        const virtualNodeParams = this.nodeDOM(htmlParams);
        const playerLinks = this.selectArray(virtualNodeParams, 'table > tbody > tr > td > a[href]');
        for (const playerLink of playerLinks) {
          playerIds.add(
            this.getAttributeAndTrim(playerLink, 'href').match(/^\/futbalnet\/clen\/\b(?<id>.*)\b(\/)?$/).groups.id
          );
        }
      }
      for (const playerId of playerIds.keys()) {
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const player = await this.player(playerId);
        if (player.ok) {
          list.push(player.data);
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

  public async player(id: string): Promise<SoccerBotResponse<SoccerBotPlayer>> {
    try {
      const html = await this.fetchPage(this.playerUrl(id));
      const data = JSON.parse(html);
      return {
        ok: true,
        data: {
          id: data?.id,
          firstName: data?.name,
          lastName: data?.surname,
          name: data?.name ? `${data?.name} ${data?.surname}` : data?.surname,
          birthdate: coerceDate(data?.birthdate, SoccerBotProvider.SPORTNET),
          country: coerceCountry(data?.country, SoccerBotProvider.SPORTNET)
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
