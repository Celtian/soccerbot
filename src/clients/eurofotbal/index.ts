import parse, { HTMLElement } from 'node-html-parser';
import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { coerceHeight, coerceJerseyNumber, coerceWeight } from '../../helpers/number';
import { coercePositionGroup } from '../../helpers/position';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://www.eurofotbal.cz';

export class SoccerBotEurofotbalClient extends SoccerBotClient {
  public leagueUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/${id}`;
  }

  public teamUrl(id: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/kluby/${id}/soupiska`;
  }

  public async league(id: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = parse(await this.fetchPage(this.leagueUrl(id)));
      // const items = html.querySelectorAll('#bookmark_100_contents_1 > table > tbody > tr:not(:first-child)');
      const items = html.querySelectorAll('#bookmark_100_contents_1 > table tr:not(:first-child)');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td:nth-child(3) > a');
        list.push({
          id: link
            .getAttribute('href')
            ?.trim()
            ?.match(/^\/kluby\/(?<id>\S+)\/$/).groups.id,
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
      const list: SoccerBotPlayer[] = [];

      const table = html.querySelector(
        // '#screen > div.all > div > div.middle > div.col-center > div.box.green > div'
        'div.middle > div.col-center > div.box.green > div'
      );

      if (table) {
        let position = 'Brankáři';
        // const sections: HTMLElement[] = table.querySelectorAll('div.bar, table > tbody');
        const sections: HTMLElement[] = table.querySelectorAll('div.bar, table');
        for (const section of sections) {
          const classAttr = section.getAttribute('class')?.trim();
          if (classAttr === 'bar') {
            position = section?.text?.trim();
          } else {
            const players = section.querySelectorAll('tr');
            for (const player of players) {
              const link = player.querySelector('td.name > a');
              const hw = player
                .querySelector('td.hw')
                .text.trim()
                .match(/^(?<height>\S+)\s\/\s(?<weight>\S+)$/);
              list.push({
                id: link
                  .getAttribute('href')
                  .trim()
                  .match(/^\/hraci\/(?<id>\S+)\/$/).groups.id,
                name: link.text.trim(),
                position: coercePositionGroup(position),
                jerseyNumber: coerceJerseyNumber(player.querySelector('td.number').text.trim()),
                birthdate: coerceDate(player.querySelector('td.birth').text.trim(), SoccerBotProvider.EUROFOTBAL),
                height: coerceHeight(hw.groups.height),
                weight: coerceWeight(hw.groups.weight),
                country: coerceCountry(
                  player.querySelector('td.flag > img').getAttribute('alt').trim(),
                  SoccerBotProvider.EUROFOTBAL
                )
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
