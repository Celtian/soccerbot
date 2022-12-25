import { SoccerBotSoccerwayClient } from '../../src/clients/soccerway';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/soccerway/league';
import { PLAYER_DATA, PLAYER_HTML } from '../mocks/soccerway/player';
import { TEAM_DATA, TEAM_HTML } from '../mocks/soccerway/team';

describe('SoccerBotSoccerwayClient', () => {
  let client: SoccerBotSoccerwayClient;

  beforeEach(() => {
    client = new SoccerBotSoccerwayClient(5);
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('r59164', '20202021')).toEqual(
        'https://int.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/'
      );
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined, '20202021')).toEqual(undefined);
      expect(client.leagueUrl('r59164', undefined)).toEqual(undefined);
      expect(client.leagueUrl(undefined, undefined)).toEqual(undefined);

      expect(client.leagueUrl(null, '20202021')).toEqual(undefined);
      expect(client.leagueUrl('r59164', null)).toEqual(undefined);
      expect(client.leagueUrl(null, null)).toEqual(undefined);

      expect(client.leagueUrl('', '20202021')).toEqual(undefined);
      expect(client.leagueUrl('r59164', '')).toEqual(undefined);
      expect(client.leagueUrl('', '')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('533')).toEqual('https://int.soccerway.com/teams/country-slug/team-slug/533/squad/');
    });

    it('should return undefined', () => {
      expect(client.teamUrl(undefined)).toEqual(undefined);
      expect(client.teamUrl(null)).toEqual(undefined);
      expect(client.teamUrl('')).toEqual(undefined);
    });
  });

  describe('playerUrl', () => {
    it('should return correct value', () => {
      expect(client.playerUrl('193498')).toEqual('https://int.soccerway.com/players/player-slug/193498/');
    });

    it('should return undefined', () => {
      expect(client.playerUrl(undefined)).toEqual(undefined);
      expect(client.playerUrl(null)).toEqual(undefined);
      expect(client.playerUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    });

    it('should return league', async () => {
      expect(await client.league('r59164', '20202021')).toEqual(LEAGUE_DATA);
    });
  });

  describe('team', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(TEAM_HTML);
        });
      });

      const handlePlayerSpy = jest.spyOn(SoccerBotSoccerwayClient.prototype as any, 'player');
      handlePlayerSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_DATA);
        });
      });
    });

    it('should return team', async () => {
      expect(await client.team('533')).toEqual(TEAM_DATA);
    });
  });

  describe('player', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotSoccerwayClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_HTML);
        });
      });
    });

    it('should return player', async () => {
      expect(await client.player('193498')).toEqual(PLAYER_DATA);
    });
  });
});
