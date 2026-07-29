import { vi } from 'vitest';
import { SoccerBotSportnetClient } from '../../src/clients/sportnet';
import { SoccerBotPlayer, SoccerBotPositionGroup, SoccerBotResponse } from '../../src/shared/interfaces';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/sportnet/league';
import { PLAYER_DATA, PLAYER_HTML } from '../mocks/sportnet/player';
import { TEAM_COMPETITION_1_HTML, TEAM_COMPETITION_2_HTML, TEAM_HTML } from '../mocks/sportnet/team';

vi.mock('../../src/helpers/shared', () => ({
  sleep: vi.fn().mockResolvedValue(undefined)
}));

describe('SoccerBotSportnetClient', () => {
  let client: SoccerBotSportnetClient;

  beforeEach(() => {
    client = new SoccerBotSportnetClient(5);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('sfz/s/3528')).toEqual('https://sportnet.sme.sk/futbalnet/z/sfz/s/3528/tabulky/');
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined)).toEqual(undefined);
      expect(client.leagueUrl(null)).toEqual(undefined);
      expect(client.leagueUrl('')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('fk-inter-bratislava/tim/46770')).toEqual(
        'https://sportnet.sme.sk/futbalnet/k/fk-inter-bratislava/tim/46770/hraci/'
      );
    });

    it('should return undefined', () => {
      expect(client.teamUrl(undefined)).toEqual(undefined);
      expect(client.teamUrl(null)).toEqual(undefined);
      expect(client.teamUrl('')).toEqual(undefined);
    });
  });

  describe('playerUrl', () => {
    it('should return correct value', () => {
      expect(client.playerUrl('1306959')).toEqual('https://api.futbalnet.sk/persons/1306959');
      expect(client.playerUrl('5d657e1986dc8b723830f531')).toEqual(
        'https://api.sportnet.online/v1/users/5d657e1986dc8b723830f531'
      );
    });

    it('should return undefined', () => {
      expect(client.playerUrl(undefined)).toEqual(undefined);
      expect(client.playerUrl(null)).toEqual(undefined);
      expect(client.playerUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    let fetchPageSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      fetchPageSpy = vi.spyOn(SoccerBotSportnetClient.prototype as any, 'fetchPage');
      fetchPageSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    });

    it('should return league', async () => {
      expect(await client.league('sfz/s/3528')).toEqual(LEAGUE_DATA);
    });

    it('should skip unrelated table rows', async () => {
      fetchPageSpy.mockResolvedValue(`
        <table>
          <tbody>
            <tr><td>Unrelated table row</td></tr>
            <tr><td><a href="/futbalnet/k/">Malformed team link</a></td></tr>
            <tr><td><a href="/futbalnet/k/example-fc/tim/dospeli-m-a/">Example FC</a></td></tr>
          </tbody>
        </table>
      `);

      expect(await client.league('sfz/s/monacobet-liga')).toEqual({
        ok: true,
        data: [{ id: 'example-fc/tim/dospeli-m-a', name: 'Example FC' }]
      });
    });
  });

  describe('team', () => {
    let fetchPageSpy: ReturnType<typeof vi.spyOn>;
    let playerSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      playerSpy = vi.spyOn(SoccerBotSportnetClient.prototype as any, 'player').mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_DATA);
        });
      });

      fetchPageSpy = vi
        .spyOn(SoccerBotSportnetClient.prototype as any, 'fetchPage')
        .mockImplementationOnce(() => {
          return new Promise((resolve) => {
            resolve(TEAM_HTML);
          });
        })
        .mockImplementationOnce(() => {
          return new Promise((resolve) => {
            resolve(TEAM_COMPETITION_1_HTML);
          });
        })
        .mockImplementationOnce(() => {
          return new Promise((resolve) => {
            resolve(TEAM_COMPETITION_2_HTML);
          });
        })
        .mockReturnValue(undefined);
    });

    it('should return team', async () => {
      const player: SoccerBotPlayer = PLAYER_DATA.data;
      const data: SoccerBotResponse<SoccerBotPlayer[]> = {
        ok: true,
        data: Array(30).fill({ ...player, position: SoccerBotPositionGroup.GOALKEEPER })
      };
      const response = await client.team('fk-inter-bratislava/tim/46770');
      response.data = response.data.map((item) => ({ ...item, position: SoccerBotPositionGroup.GOALKEEPER }));
      expect(response).toEqual(data);
    });

    it('should return an empty team without player lookups', async () => {
      fetchPageSpy.mockReset().mockResolvedValue('<p>Nepodarilo sa získať súpisku tímu!</p>');

      expect(await client.team('fk-inter-bratislava-1/tim/dospeli-m-a')).toEqual({ ok: true, data: [] });
      expect(fetchPageSpy).toHaveBeenCalledTimes(1);
      expect(playerSpy).not.toHaveBeenCalled();
    });

    it('should parse the current roster markup directly from the team page', async () => {
      fetchPageSpy.mockReset().mockResolvedValue(`
        <section>
          <div>
            <p>Brankári</p>
            <a href="/futbalnet/clen/5d657e1986dc8b723830f531/adrian-slancik/">Adrián Slančík</a>
          </div>
          <div>
            <p>Obrancovia</p>
            <a href="/futbalnet/clen/5d6585ad86dc8b7238326618/lukas-jendrek/">Lukáš Jendrek</a>
          </div>
          <div>
            <p>Tréner</p>
            <a href="/futbalnet/clen/5d65417e86dc8b72382557d2/marek-petrus/">Marek Petruš</a>
          </div>
        </section>
      `);
      playerSpy
        .mockResolvedValueOnce({
          ok: true,
          data: { id: '5d657e1986dc8b723830f531', name: 'Adrián Slančík' }
        })
        .mockResolvedValueOnce({
          ok: true,
          data: { id: '5d6585ad86dc8b7238326618', name: 'Lukáš Jendrek' }
        });

      expect(await client.team('mfk-tatran-liptovsky-mikulas/tim/dospeli-m-a')).toEqual({
        ok: true,
        data: [
          {
            id: '5d657e1986dc8b723830f531',
            name: 'Adrián Slančík',
            position: SoccerBotPositionGroup.GOALKEEPER
          },
          {
            id: '5d6585ad86dc8b7238326618',
            name: 'Lukáš Jendrek',
            position: SoccerBotPositionGroup.DEFENDER
          }
        ]
      });
      expect(fetchPageSpy).toHaveBeenCalledTimes(1);
      expect(playerSpy).toHaveBeenNthCalledWith(1, '5d657e1986dc8b723830f531');
      expect(playerSpy).toHaveBeenNthCalledWith(2, '5d6585ad86dc8b7238326618');
    });
  });

  describe('player', () => {
    let fetchPageSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      fetchPageSpy = vi.spyOn(SoccerBotSportnetClient.prototype as any, 'fetchPage');
      fetchPageSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_HTML);
        });
      });
    });

    it('should return player', async () => {
      expect(await client.player('1306959')).toEqual(PLAYER_DATA);
    });

    it('should return a player from the current Sportnet API', async () => {
      fetchPageSpy.mockResolvedValue(
        JSON.stringify({
          _id: '5d657e1986dc8b723830f531',
          name: 'Adrián',
          surname: 'Slančík',
          citizenship: 'SVK',
          birthyear: 1999
        })
      );

      expect(await client.player('5d657e1986dc8b723830f531')).toEqual({
        ok: true,
        data: {
          id: '5d657e1986dc8b723830f531',
          firstName: 'Adrián',
          lastName: 'Slančík',
          name: 'Adrián Slančík',
          birthdate: undefined,
          country: {
            databaseName: 'Slovakia',
            code2: 'SK',
            code3: 'SVK'
          }
        }
      });
    });
  });
});
