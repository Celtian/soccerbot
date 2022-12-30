import parse from 'node-html-parser';
import { coerceCountry } from '../../helpers/country';
import { coerceDate } from '../../helpers/date';
import { coerceFoot } from '../../helpers/foot';
import { coerceMarketValue } from '../../helpers/market-value';
import { coerceHeight, coerceJerseyNumber } from '../../helpers/number';
import { coercePositionGroup } from '../../helpers/position';
import { SoccerBotPlayer, SoccerBotProvider, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';
import { SoccerBotClient } from '../shared';

const BASE_URL = 'https://www.transfermarkt.com';

export class SoccerBotTransfermarktClient extends SoccerBotClient {
  public leagueUrl(id: string, season?: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/slug/startseite/wettbewerb/${id}${season ? '/plus?saison_id=' + season : ''}`;
  }

  public teamUrl(id: string, season?: string): string {
    if (!id) {
      return undefined;
    }
    return `${BASE_URL}/slug/kader/verein/${id}/plus/1${season ? '?saison_id=' + season : ''}`;
  }

  public async league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    try {
      const html = parse(await this.fetchPage(this.leagueUrl(id, season)));

      const items = html.querySelectorAll('#yw1 > table > tbody > tr');
      const list: SoccerBotTeam[] = [];
      for (const item of items) {
        const link = item.querySelector('td.hauptlink.no-border-links > a');
        list.push({
          id: link
            .getAttribute('href')
            ?.trim()
            ?.match(/^\/(\S+)\/startseite\/verein\/(?<id>\d+)\/saison_id\/(\d+)/)?.groups?.id,
          name: link.getAttribute('title')?.trim()
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

  public async team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    try {
      const html = parse(await this.fetchPage(this.teamUrl(id, season)));
      const items = html.querySelectorAll('#yw1 > table > tbody > tr');
      const list: SoccerBotPlayer[] = [];
      for (const item of items) {
        // const link = item.querySelector('td.posrela > table > tbody > tr:nth-child(1) > td.hauptlink > a');
        const link = item.querySelector('td.posrela > table tr:nth-child(1) > td.hauptlink > a');
        const flagSrc = item
          .querySelector('td:nth-child(4) > img:nth-child(1)')
          ?.getAttribute('src')
          ?.trim()
          .match(/^https:\/\/(.+)\/(?<id>\d+)\.png/);
        list.push({
          id: link
            .getAttribute('href')
            ?.trim()
            ?.match(/\/(\S+)\/profil\/spieler\/(?<id>\d+)$/)?.groups?.id,
          name: link?.text?.trim(),
          jerseyNumber: coerceJerseyNumber(item.querySelector('td:nth-child(1) > div.rn_nummer')?.text?.trim()),
          // position: coercePositionGroup(item.querySelector('td:nth-child(2) > table > tbody > tr:nth-child(2) > td')?.text?.trim()),
          position: coercePositionGroup(
            item.querySelector('td:nth-child(2) > table tr:nth-child(2) > td')?.text?.trim()
          ),
          birthdate: coerceDate(item.querySelector('td:nth-child(3)')?.text?.trim(), SoccerBotProvider.TRANSFERMARKT),
          height: coerceHeight(item.querySelector('td:nth-child(5)')?.text?.trim()),
          foot: coerceFoot(item.querySelector('td:nth-child(6)')?.text?.trim()),
          joined: coerceDate(item.querySelector('td:nth-child(7)')?.text?.trim(), SoccerBotProvider.TRANSFERMARKT),
          contractExpires: coerceDate(
            item.querySelector('td:nth-child(9)')?.text?.trim(),
            SoccerBotProvider.TRANSFERMARKT
          ),
          marketValue: coerceMarketValue(item.querySelector('td:nth-child(10)')?.text?.trim()),
          country: coerceCountry(
            flagSrc && flagSrc.groups ? flagSrc.groups.id : undefined,
            SoccerBotProvider.TRANSFERMARKT
          )
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
}
