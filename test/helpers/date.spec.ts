import { coerceDate } from '../../lib/helpers/date';
import { SoccerBotProvider } from '../../lib/shared/interfaces';

describe('coerceDate', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceDate('Oct 17, 1994 (26)', SoccerBotProvider.TRANSFERMARKT)).toEqual('1994-10-17');
      expect(coerceDate('Oct 17, 1994', SoccerBotProvider.TRANSFERMARKT)).toEqual('1994-10-17');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate('', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate(null, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate(undefined, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceDate('4 March 1993', SoccerBotProvider.SOCCERWAY)).toEqual('1993-03-04');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate('', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate(null, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate(undefined, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceDate('whatever', SoccerBotProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });

  describe('eurofotbal', () => {
    it('should return correct value', () => {
      expect(coerceDate('18.03.1995', SoccerBotProvider.EUROFOTBAL)).toEqual('1995-03-18');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate('', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate(null, SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate(undefined, SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
    });
  });
});
