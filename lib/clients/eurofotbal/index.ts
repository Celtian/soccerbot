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
      const html = await this.fetchPage(this.leagueUrl(id));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#bookmark_100_contents_1 > table > tbody > tr:not(:first-child)');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td:nth-child(3) > a');
        list.push({
          id: this.getAttributeAndTrim(link, 'href').match(/^\/kluby\/(?<id>\S+)\/$/).groups.id,
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
      const list: SoccerBotPlayer[] = [];

      const table = this.selectArray(
        virtualNode,
        '#screen > div.all > div > div.middle > div.col-center > div.box.green > div'
      )[0];

      if (table) {
        let position = 'Brankáři';
        const sections: (HTMLDivElement | HTMLTableSectionElement)[] = [].slice.call(
          table.querySelectorAll(`div.bar, table > tbody`)
        );
        for (const section of sections) {
          const classAttr = this.getAttributeAndTrim(section, 'class');
          if (classAttr === 'bar') {
            position = this.getTextAndTrim(section);
          } else {
            const players = [].slice.call(section.querySelectorAll('tr'));
            for (const player of players) {
              const link = player.querySelector('td.name > a');
              const hw = this.getTextAndTrim(player.querySelector('td.hw')).match(
                /^(?<height>\S+)\s\/\s(?<weight>\S+)$/
              );
              list.push({
                id: this.getAttributeAndTrim(link, 'href').match(/^\/hraci\/(?<id>\S+)\/$/).groups.id,
                name: this.getTextAndTrim(link),
                position: coercePositionGroup(position),
                jerseyNumber: coerceJerseyNumber(this.getTextAndTrim(player.querySelector('td.number'))),
                birthdate: coerceDate(
                  this.getTextAndTrim(player.querySelector('td.birth')),
                  SoccerBotProvider.EUROFOTBAL
                ),
                height: coerceHeight(hw.groups.height),
                weight: coerceWeight(hw.groups.weight),
                country: coerceCountry(
                  this.getAttributeAndTrim(player.querySelector('td.flag > img'), 'alt'),
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
