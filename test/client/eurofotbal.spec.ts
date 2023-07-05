import { SoccerBotEurofotbalClient } from '../../src/clients/eurofotbal';
import { TEAM_DATA, TEAM_HTML } from '../mocks/eurofotbal/team';

describe('SoccerBotEurofotbalClient', () => {
  let client: SoccerBotEurofotbalClient;

  beforeEach(() => {
    client = new SoccerBotEurofotbalClient();
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
      expect(await client.team('cesko/slavia-praha')).toEqual(TEAM_DATA);
    });
  });
});
