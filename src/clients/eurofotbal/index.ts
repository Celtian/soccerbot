import parse from 'node-html-parser';
import {
  coerceCountry,
  coerceDate,
  coerceHeight,
  coerceJerseyNumber,
  coercePositionGroup,
  coerceWeight
} from '../../helpers';
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
      const table = html.querySelector('.tab-content [role="table"]');
      const rows = table.querySelectorAll('[role="row"]');
      const list: SoccerBotTeam[] = [];
      for (const row of rows) {
        const onClickAttr = row.getAttribute('onclick');
        if (!onClickAttr) continue;
        const regex = /window.location='\/kluby\/(.+?)\/';/;
        const id = onClickAttr.trim().replace(regex, '$1');
        const cells = row.querySelectorAll('[role="cell"]');
        list.push({
          id,
          name: cells[2].text.trim()
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
      const headers = html.querySelectorAll('.e-club-roster .mt-30');
      const tables = html.querySelectorAll(
        '.e-club-roster .mt-30 + .e-tables-table-overview__container-overflow > [role="table"]'
      );
      if (headers.length < 4) {
        return {
          ok: true,
          data: list
        };
      }
      for (let i = 0; i < 4; i++) {
        const header = headers[i].text.trim();
        if (header === 'Brankáři' || header === 'Obránci' || header === 'Záložníci' || header === 'Útočníci') {
          const position = coercePositionGroup(header);
          const rows = tables[i].querySelectorAll('.e-tables-table-overview__row--hoverable-secondary[role="row"]');
          for (const row of rows) {
            const cells = row.querySelectorAll('[role="cell"]');
            const regex = /window.location='\/hraci\/(.+?)\/';/;
            const id = row.getAttribute('onclick').trim().replace(regex, '$1');
            const hw = cells[4].text.trim().match(/^(?<height>\S+)\s\/\s(?<weight>\S+)$/);

            list.push({
              id,
              position,
              jerseyNumber: coerceJerseyNumber(cells[0].text.trim()),
              name: cells[2].text.trim(),
              country: coerceCountry(cells[1].getAttribute('title').trim(), SoccerBotProvider.EUROFOTBAL),
              birthdate: coerceDate(cells[3].text.trim(), SoccerBotProvider.EUROFOTBAL),
              height: coerceHeight(hw.groups.height),
              weight: coerceWeight(hw.groups.weight)
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
