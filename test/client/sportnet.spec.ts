import { SoccerBotSportnetClient } from '../../lib/clients/sportnet';
import { SoccerBotPlayer, SoccerBotPositionGroup, SoccerBotResponse } from '../../lib/shared/interfaces';
import { LEAGUE_DATA, LEAGUE_HTML } from '../mocks/sportnet/league';
import { PLAYER_DATA, PLAYER_HTML } from '../mocks/sportnet/player';
import { TEAM_COMPETITION_1_HTML, TEAM_COMPETITION_2_HTML, TEAM_HTML } from '../mocks/sportnet/team';

describe('SoccerBotSportnetClient', () => {
  let client: SoccerBotSportnetClient;

  beforeEach(() => {
    client = new SoccerBotSportnetClient(5);
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
    });

    it('should return undefined', () => {
      expect(client.playerUrl(undefined)).toEqual(undefined);
      expect(client.playerUrl(null)).toEqual(undefined);
      expect(client.playerUrl('')).toEqual(undefined);
    });
  });

  describe('league', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotSportnetClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    });

    it('should return league', async () => {
      expect(await client.league('sfz/s/3528')).toEqual(LEAGUE_DATA);
    });
  });

  describe('team', () => {
    beforeEach(() => {
      jest.spyOn(SoccerBotSportnetClient.prototype as any, 'player').mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_DATA);
        });
      });

      jest
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
  });

  describe('player', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(SoccerBotSportnetClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(PLAYER_HTML);
        });
      });
    });

    it('should return player', async () => {
      expect(await client.player('1306959')).toEqual(PLAYER_DATA);
    });
  });
});
