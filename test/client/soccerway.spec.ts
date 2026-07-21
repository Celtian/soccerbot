import { vi } from 'vitest';
import { SoccerBotSoccerwayClient } from '../../src/clients/soccerway';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/soccerway/league';
import { PLAYER_DATA, PLAYER_HTML } from '../mocks/soccerway/player';
import { TEAM_DATA, TEAM_HTML } from '../mocks/soccerway/team';

describe('SoccerBotSoccerwayClient', () => {
  let client: SoccerBotSoccerwayClient;

  beforeEach(() => {
    client = new SoccerBotSoccerwayClient(5);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('czech-republic/chance-liga/standings/bNFMkskm')).toEqual(
        'https://www.soccerway.com/czech-republic/chance-liga/standings/bNFMkskm/standings/overall/'
      );
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined)).toEqual(undefined);
      expect(client.leagueUrl(null)).toEqual(undefined);
      expect(client.leagueUrl('')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('slavia-prague/viXGgnyB')).toEqual(
        'https://www.soccerway.com/team/slavia-prague/viXGgnyB/squad/'
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
      expect(client.playerUrl('kolar-ondrej/xfBGcS1U')).toEqual(
        'https://www.soccerway.com/player/kolar-ondrej/xfBGcS1U/'
      );
    });

    it('should return undefined', () => {
      expect(client.playerUrl(undefined)).toEqual(undefined);
      expect(client.playerUrl(null)).toEqual(undefined);
      expect(client.playerUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    beforeEach(() => {
      const handleSpy = vi.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    });

    it('should return league', async () => {
      const result = await client.league('czech-republic/chance-liga/standings/bNFMkskm');

      expect(result).toEqual(LEAGUE_DATA);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.data).toHaveLength(16);
        expect(new Set(result.data.map(({ id }) => id)).size).toBe(16);
        expect(result.data).toContainEqual({ id: 'slavia-prague/viXGgnyB', name: 'Slavia Prague' });
      }
    });
  });

  describe('team', () => {
    let handlePlayerSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      const handleSpy = vi.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(TEAM_HTML);
        });
      });

      handlePlayerSpy = vi.spyOn(SoccerBotSoccerwayClient.prototype as any, 'player');
      handlePlayerSpy.mockImplementation((id: string) => {
        return new Promise((resolve) => {
          resolve({
            ok: true,
            data: { id }
          });
        });
      });
    });

    it('should return team', async () => {
      expect(await client.team('slavia-prague/viXGgnyB')).toEqual(TEAM_DATA);
      expect(handlePlayerSpy).toHaveBeenCalledTimes(48);
      expect(handlePlayerSpy).toHaveBeenCalledWith('kolar-ondrej/xfBGcS1U');
      if (TEAM_DATA.ok) {
        expect(handlePlayerSpy.mock.calls.map(([id]) => id)).toEqual(TEAM_DATA.data.map(({ id }) => id));
      }
    });
  });

  describe('player', () => {
    beforeEach(() => {
      const handleSpy = vi.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_HTML);
        });
      });
    });

    it('should return player', async () => {
      expect(await client.player('kolar-ondrej/xfBGcS1U')).toEqual(PLAYER_DATA);
    });
  });
});
