import { coerceCoutry } from '../../lib/helpers';
import { SoccerBotCountry, SoccerBotProvider } from '../../lib/shared';

describe('coerceCoutry', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceCoutry('1', SoccerBotProvider.TRANSFERMARKT)).toEqual(SoccerBotCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCoutry('xxx', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCoutry('', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCoutry('999999', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCoutry(null, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCoutry(undefined, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceCoutry('Afghanistan', SoccerBotProvider.SOCCERWAY)).toEqual(SoccerBotCountry.AFGHANISTAN);
    });
    it('should return undefined', () => {
      expect(coerceCoutry('xxx', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCoutry('', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCoutry('999999', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCoutry(null, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCoutry(undefined, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceCoutry('whatever', SoccerBotProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });
});
