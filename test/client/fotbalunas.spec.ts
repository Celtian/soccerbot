import { SoccerBotFotbalunasClient } from '../../lib/clients/fotbalunas';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/fotbalunas/league';
import { CLUB_HTML, TEAM_DATA, TEAM_HTML } from '../mocks/fotbalunas/team';

describe('SoccerBotFotbalunasClient', () => {
  let client: SoccerBotFotbalunasClient;

  beforeEach(() => {
    client = new SoccerBotFotbalunasClient(5);
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('31')).toEqual('https://fotbalunas.cz/tabulky/soutez/31');
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined)).toEqual(undefined);
      expect(client.leagueUrl(null)).toEqual(undefined);
      expect(client.leagueUrl('')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('62')).toEqual('https://fotbalunas.cz/tym/62');
    });

    it('should return undefined', () => {
      expect(client.teamUrl(undefined)).toEqual(undefined);
      expect(client.teamUrl(null)).toEqual(undefined);
      expect(client.teamUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotFotbalunasClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    });

    it('should return league', async () => {
      expect(await client.league('31')).toEqual(LEAGUE_DATA);
    });
  });

  describe('team', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotFotbalunasClient.prototype as any, 'fetchPage');
      handleSpy
        .mockImplementationOnce(() => {
          return new Promise((resolve) => {
            resolve(TEAM_HTML);
          });
        })
        .mockImplementationOnce(() => {
          return new Promise((resolve) => {
            resolve(CLUB_HTML);
          });
        })
        .mockReturnValue(undefined);
    });

    it('should return team', async () => {
      expect(await client.team('62')).toEqual(TEAM_DATA);
    });
  });
});
