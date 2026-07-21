import { vi } from 'vitest';
import { SoccerBotEurofotbalClient } from '../../src/clients/eurofotbal';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/eurofotbal/league';
import { TEAM_DATA, TEAM_HTML } from '../mocks/eurofotbal/team';

describe('SoccerBotEurofotbalClient', () => {
  let client: SoccerBotEurofotbalClient;

  beforeEach(() => {
    client = new SoccerBotEurofotbalClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('leagueUrl', () => {
    it('should return correct value', () => {
      expect(client.leagueUrl('chance-liga')).toEqual('https://www.eurofotbal.cz/chance-liga/tabulky/');
    });

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined)).toEqual(undefined);
      expect(client.leagueUrl(null)).toEqual(undefined);
      expect(client.leagueUrl('')).toEqual(undefined);
    });
  });

  describe('teamUrl', () => {
    it('should return correct value', () => {
      expect(client.teamUrl('cesko/slavia-praha')).toEqual(
        'https://www.eurofotbal.cz/kluby/cesko/slavia-praha/soupiska'
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
      const handleSpy = vi.spyOn(SoccerBotEurofotbalClient.prototype as any, 'fetchPage');
      handleSpy.mockResolvedValue(LEAGUE_HTML);
    });

    it('should return league', async () => {
      const result = await client.league('chance-liga');

      expect(result).toEqual(LEAGUE_DATA);
      if (result.ok) {
        expect(result.data).toHaveLength(16);
        expect(result.data).toContainEqual({ id: 'cesko/slavia-praha', name: 'Slavia Praha' });
      }
    });
  });

  describe('team', () => {
    beforeEach(() => {
      const handleSpy = vi.spyOn(SoccerBotEurofotbalClient.prototype as any, 'fetchPage');
      handleSpy.mockResolvedValue(TEAM_HTML);
    });

    it('should return team', async () => {
      const result = await client.team('cesko/slavia-praha');

      expect(result).toEqual(TEAM_DATA);
      if (result.ok) {
        expect(result.data).toHaveLength(33);
        expect(result.data).toContainEqual(expect.objectContaining({ id: 'ondrej-kolar-32017', name: 'Ondřej Kolář' }));
      }
    });

    it('should return an empty team when roster sections are missing', async () => {
      vi.spyOn(SoccerBotEurofotbalClient.prototype as any, 'fetchPage').mockResolvedValue('<html></html>');

      expect(await client.team('cesko/slavia-praha')).toEqual({ ok: true, data: [] });
    });
  });
});
