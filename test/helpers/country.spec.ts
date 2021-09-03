import { coerceCountry } from '../../lib/helpers/country';
import { SoccerBotCountry, SoccerBotProvider } from '../../lib/shared/interfaces';

describe('coerceCountry', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceCountry('1', SoccerBotProvider.TRANSFERMARKT)).toEqual(SoccerBotCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry(null, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry(undefined, SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghanistan', SoccerBotProvider.SOCCERWAY)).toEqual(SoccerBotCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry(null, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry(undefined, SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceCountry('whatever', SoccerBotProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });

  describe('eurofotbal', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghánistán', SoccerBotProvider.EUROFOTBAL)).toEqual(SoccerBotCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry(null, SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry(undefined, SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
    });
  });
});
