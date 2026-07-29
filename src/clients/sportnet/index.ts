import parse, { HTMLElement } from 'node-html-parser';
import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { coercePositionGroup } from '../../helpers/position';
import { sleep } from '../../helpers/shared';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://sportnet.sme.sk';
const POSITION_NAMES = ['Brankári', 'Obrancovia', 'Záložníci', 'Útočníci'];

interface SportnetPlayerReference {
  name: string;
  position: string;
}

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
    if (/^[a-f\d]{24}$/i.test(id)) {
      return `https://api.sportnet.online/v1/users/${id}`;
    }
    return `https://api.futbalnet.sk/persons/${id}`;
  }

  public async league(id: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = parse(await this.fetchPage(this.leagueUrl(id)));
      const items = html.querySelectorAll('table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('a[href^="/futbalnet/k/"]');
        if (!link) {
          continue;
        }
        const match = link
          .getAttribute('href')
          .trim()
          .match(/^\/futbalnet\/k\/(?<id>.+?)\/?$/);
        if (!match) {
          continue;
        }
        list.push({
          id: match.groups.id,
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
      const list: SoccerBotPlayer[] = [];
      const players = new Map<string, SportnetPlayerReference>();
      this.addPlayerReferences(html, players);

      if (!players.size) {
        const links = html.querySelectorAll('div:nth-child(2) > div.dropdown-body > a');
        for (const link of links) {
          const href = link.getAttribute('href')?.trim();
          if (!href) {
            continue;
          }
          await sleep(this.sleepMs); // sleep for a moment because of rare limit
          const htmlParams = parse(await this.fetchPage(new URL(href, BASE_URL).toString()));
          this.addPlayerReferences(htmlParams, players);
        }
      }

      for (const key of players.keys()) {
        await sleep(this.sleepMs); // sleep for a moment because of rare limit
        const reference = players.get(key);
        const player = await this.player(key);
        if (player.ok) {
          list.push({
            position: coercePositionGroup(reference.position),
            ...player.data
          });
        } else {
          list.push({
            id: key,
            name: reference.name,
            position: coercePositionGroup(reference.position)
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
          id: data?.id || data?._id,
          firstName: data?.name,
          lastName: data?.surname,
          name: data?.name ? `${data?.name} ${data?.surname}` : data?.surname,
          birthdate: coerceDate(data?.birthdate, SoccerBotProvider.SPORTNET),
          country: coerceCountry(data?.country || data?.citizenship, SoccerBotProvider.SPORTNET)
        }
      };
    } catch (error) {
      return {
        ok: false,
        errors: error
      };
    }
  }

  private addPlayerReferences(html: HTMLElement, players: Map<string, SportnetPlayerReference>): void {
    const links = html.querySelectorAll('a[href^="/futbalnet/clen/"]');
    for (const link of links) {
      const href = link.getAttribute('href')?.trim();
      const match = href?.match(/^\/futbalnet\/clen\/(?<id>[^/]+)(?:\/[^/]*)?\/?$/);
      if (!match?.groups?.id) {
        continue;
      }
      const position = this.findPosition(link);
      if (!position) {
        continue;
      }
      players.set(match.groups.id, {
        name: link.text.trim(),
        position
      });
    }
  }

  private findPosition(link: HTMLElement): string {
    let parent = link.parentNode as HTMLElement;
    while (parent) {
      const positions = parent
        .querySelectorAll('p, th, h1, h2, h3, h4')
        .map((item) => item.text.trim())
        .filter((item) => POSITION_NAMES.includes(item));
      if (positions.length === 1) {
        return positions[0];
      }
      parent = parent.parentNode as HTMLElement;
    }
    return undefined;
  }
}
