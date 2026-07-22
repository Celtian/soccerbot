import { vi } from 'vitest';
import { worldfootball } from '../../src';
import { SoccerBotWorldFootballClient } from '../../src/clients';
import { UserAgents } from '../../src/clients/shared';
import { SoccerBotCountryCode2, SoccerBotCountryCode3 } from '../../src/shared/countries';
import { SoccerBotPositionDetail, SoccerBotPositionGroup } from '../../src/shared/interfaces';
import { LEAGUE_HTML, PLAYER_HTML, TEAM_HTML } from '../mocks/worldfootball';

describe('SoccerBotWorldFootballClient', () => {
  let client: SoccerBotWorldFootballClient;

  beforeEach(() => {
    client = new SoccerBotWorldFootballClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('urls', () => {
    it('should export a configured client from the package root', () => {
      expect(worldfootball).toBeInstanceOf(SoccerBotWorldFootballClient);
    });

    it('should return the official WorldFootball URLs', () => {
      expect(client.leagueUrl('co7093/mexico-lp---serie-b')).toEqual(
        'https://www.worldfootball.net/competition/co7093/mexico-lp---serie-b/'
      );
      expect(client.teamUrl('te237557/artesanos-metepec')).toEqual(
        'https://www.worldfootball.net/teams/te237557/artesanos-metepec/squad/'
      );
      expect(client.playerUrl('pe599828/oscar-altamirano')).toEqual(
        'https://www.worldfootball.net/person/pe599828/oscar-altamirano/'
      );
    });

    it.each([undefined, null, ''])('should return undefined for %s', (id) => {
      expect(client.leagueUrl(id)).toBeUndefined();
      expect(client.teamUrl(id)).toBeUndefined();
      expect(client.playerUrl(id)).toBeUndefined();
    });

    it('should accept but ignore the current-season compatibility argument', () => {
      expect(client.leagueUrl('co7093/mexico-lp---serie-b', '2024')).toEqual(
        client.leagueUrl('co7093/mexico-lp---serie-b')
      );
      expect(client.teamUrl('te237557/artesanos-metepec', '2024')).toEqual(
        client.teamUrl('te237557/artesanos-metepec')
      );
    });
  });

  it('should parse and deduplicate league teams across standings tables', async () => {
    vi.spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage').mockResolvedValue(LEAGUE_HTML);

    expect(await client.league('co7093/mexico-lp---serie-b')).toEqual({
      ok: true,
      data: [
        { id: 'te237557/artesanos-metepec', name: 'Artesanos Metepec' },
        { id: 'te30073/poza-rica', name: 'Poza Rica' },
        { id: 'te162513/cd-ayense', name: 'CD Ayense' }
      ]
    });
  });

  it('should parse squad players and exclude the manager', async () => {
    vi.spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage').mockResolvedValue(TEAM_HTML);

    expect(await client.team('te237557/artesanos-metepec')).toEqual({
      ok: true,
      data: [
        {
          id: 'pe1801229/victor-alvarez',
          name: 'Víctor Álvarez',
          jerseyNumber: 23,
          position: SoccerBotPositionGroup.GOALKEEPER,
          birthdate: '2003-03-05',
          country: {
            databaseName: 'Mexico',
            code2: SoccerBotCountryCode2.MX,
            code3: SoccerBotCountryCode3.MEX
          }
        },
        {
          id: 'pe599828/oscar-altamirano',
          name: 'Oscar Altamirano',
          jerseyNumber: 5,
          position: SoccerBotPositionGroup.MIDFIELDER,
          birthdate: '2002-04-02',
          country: {
            databaseName: 'Mexico',
            code2: SoccerBotCountryCode2.MX,
            code3: SoccerBotCountryCode3.MEX
          }
        }
      ]
    });
  });

  it('should parse a rich person profile', async () => {
    vi.spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage').mockResolvedValue(PLAYER_HTML);

    expect(await client.player('pe599828/oscar-altamirano')).toEqual({
      ok: true,
      data: {
        id: 'pe599828/oscar-altamirano',
        name: 'Oscar Altamirano',
        firstName: 'Oscar',
        lastName: 'Altamirano',
        jerseyNumber: 5,
        position: SoccerBotPositionGroup.MIDFIELDER,
        positionDetail: SoccerBotPositionDetail.CAM,
        birthdate: '2002-04-02',
        height: 172,
        weight: 70,
        country: {
          databaseName: 'Mexico',
          code2: SoccerBotCountryCode2.MX,
          code3: SoccerBotCountryCode3.MEX
        }
      }
    });
  });

  it('should retry a Cloudflare challenge through the mirror', async () => {
    const fetchPageSpy = vi
      .spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage')
      .mockResolvedValueOnce('<html><head><title>Just a moment...</title></head></html>')
      .mockResolvedValueOnce(PLAYER_HTML);

    expect((await client.player('pe599828/oscar-altamirano')).ok).toBe(true);
    expect(fetchPageSpy).toHaveBeenCalledTimes(2);
    expect(fetchPageSpy).toHaveBeenNthCalledWith(
      1,
      'https://www.worldfootball.net/person/pe599828/oscar-altamirano/',
      true
    );
    expect(fetchPageSpy).toHaveBeenNthCalledWith(
      2,
      'https://www.livefutbol.com/person/pe599828/oscar-altamirano/',
      true,
      UserAgents.Ipod
    );
  });

  it('should return an error for malformed provider HTML', async () => {
    vi.spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage').mockResolvedValue('<html></html>');

    expect((await client.league('co7093/mexico-lp---serie-b')).ok).toBe(false);
    expect((await client.team('te237557/artesanos-metepec')).ok).toBe(false);
    expect((await client.player('pe599828/oscar-altamirano')).ok).toBe(false);
  });

  it('should return an error when both sources fail', async () => {
    const fetchPageSpy = vi
      .spyOn(SoccerBotWorldFootballClient.prototype as any, 'fetchPage')
      .mockResolvedValue('Error');

    expect((await client.player('pe599828/oscar-altamirano')).ok).toBe(false);
    expect(fetchPageSpy).toHaveBeenCalledTimes(2);
  });
});
