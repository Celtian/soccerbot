import parse from 'node-html-parser';
import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { coercePositionGroup } from '../../helpers/position';
import { sleep } from '../../helpers/shared';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
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
      const html = parse(await this.fetchPage(this.leagueUrl(id)));
      const items = html.querySelectorAll('table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td:nth-child(3) > a');
        list.push({
          id: link
            .getAttribute('href')
            .trim()
            .match(/^\/futbalnet\/k\/\b(?<id>.*)\b(\/)?$/).groups.id,
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
      const links = html.querySelectorAll('div:nth-child(2) > div.dropdown-body > a');
      const list: SoccerBotPlayer[] = [];
      const players = new Map<string, string>();
      for (const link of links) {
        const href = link.getAttribute('href').trim();
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const htmlParams = parse(await this.fetchPage(BASE_URL + href));

        const playerLinks = htmlParams.querySelectorAll(
          'table > tbody > tr > td > a[href], table > thead > tr > th:nth-child(1)'
        );
        let position = 'Brankári';
        for (const playerLink of playerLinks) {
          const text = playerLink.text.trim();
          if (['Brankári', 'Obrancovia', 'Záložníci', 'Útočníci'].includes(text)) {
            position = text;
          } else {
            players.set(
              playerLink
                .getAttribute('href')
                .trim()
                .match(/^\/futbalnet\/clen\/\b(?<id>.*)\b(\/)?$/).groups.id,
              position
            );
          }
        }
      }
      for (const key of players.keys()) {
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const value = players.get(key);
        const player = await this.player(key);
        if (player.ok) {
          list.push({
            position: coercePositionGroup(value),
            ...player.data
          });
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
