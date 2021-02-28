import { SoccerBotTransfermarktClient } from '../../lib/clients/transfermarkt';
import { LEAGUE_DATA, LEAGUE_HTML, TEAM_DATA, TEAM_HTML } from '../mocks/transfermarkt';

describe('SoccerBotTransfermarktClient', () => {
  let client: SoccerBotTransfermarktClient;

  beforeEach(() => {
    client = new SoccerBotTransfermarktClient();
  });

  describe('leagueUrl',() => {
    it('should return correct value', () => {
      expect(client.leagueUrl('TS1'))
       .toEqual('https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1');
      expect(client.leagueUrl('TS1','2018'))
       .toEqual('https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1/plus?saison_id=2018');
    })

    it('should return undefined', () => {
      expect(client.leagueUrl(undefined, '2018')).toEqual(undefined);
      expect(client.leagueUrl(undefined, undefined)).toEqual(undefined);

      expect(client.leagueUrl(null, '2018')).toEqual(undefined);
      expect(client.leagueUrl(null, null)).toEqual(undefined);

      expect(client.leagueUrl('', '2018')).toEqual(undefined);
      expect(client.leagueUrl('', '')).toEqual(undefined);
    })
  })

  describe('teamUrl',() => {
    it('should return correct value', () => {
      expect(client.teamUrl('533')).toEqual('https://www.transfermarkt.com/slug/kader/verein/533/plus/1');
    })

    it('should return undefined', () => {
      expect(client.teamUrl(undefined)).toEqual(undefined);
      expect(client.teamUrl(null)).toEqual(undefined);
      expect(client.teamUrl('')).toEqual(undefined);
    })
  })

  describe('league',() => {
    beforeEach(() => {
      const handleSpy = spyOn(SoccerBotTransfermarktClient.prototype as any, 'fetchPage');
      handleSpy.and.callFake(() => {
        return new Promise((resolve) => {
          resolve(LEAGUE_HTML);
        });
      });
    })

    it('should return league', async() => {
      expect(await client.league('TS1')).toEqual(LEAGUE_DATA);
    })
  })

  describe('team',() => {
    beforeEach(() => {
      const handleSpy = spyOn(SoccerBotTransfermarktClient.prototype as any, 'fetchPage');
      handleSpy.and.callFake(() => {
        return new Promise((resolve) => {
          resolve(TEAM_HTML);
        });
      });
    })

    it('should return team', async() => {
      expect(await client.team('62')).toEqual(TEAM_DATA);
    })
  })
})
