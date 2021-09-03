import { SoccerBotEurofotbalClient } from '../../lib/clients/eurofotbal';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/eurofotbal/league';
import { TEAM_DATA, TEAM_HTML } from '../mocks/eurofotbal/team';

describe('SoccerBotEurofotbalClient', () => {
  let client: SoccerBotEurofotbalClient;

  beforeEach(() => {
    client = new SoccerBotEurofotbalClient();
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('1-fotbalova-liga')).toEqual('https://www.eurofotbal.cz/1-fotbalova-liga');
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined)).toEqual(undefined);
      expect(client.leagueUrl(null)).toEqual(undefined);
      expect(client.leagueUrl('')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('cesko/sparta-praha')).toEqual(
        'https://www.eurofotbal.cz/kluby/cesko/sparta-praha/soupiska'
      );
    });

    it('should return undefined', () => {
      expect(client.teamUrl(undefined)).toEqual(undefined);
      expect(client.teamUrl(null)).toEqual(undefined);
      expect(client.teamUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotEurofotbalClient.prototype as any, 'fetchPage');
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
      const handleSpy = jest.spyOn(SoccerBotEurofotbalClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(TEAM_HTML);
        });
      });
    });

    it('should return team', async () => {
      expect(await client.team('cesko/sparta-praha')).toEqual(TEAM_DATA);
    });
  });
});
