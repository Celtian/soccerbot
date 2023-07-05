import { coerceCountry } from '../../src/helpers/country';
import { SoccerBotCountryCode2, SoccerBotCountryCode3 } from '../../src/shared/countries';
import { SoccerBotProvider } from '../../src/shared/interfaces';

describe('coerceCountry', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceCountry('1', SoccerBotProvider.TRANSFERMARKT)).toEqual({
        databaseName: 'Afghanistan',
        code2: SoccerBotCountryCode2.AF,
        code3: SoccerBotCountryCode3.AFG
      });
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghanistan', SoccerBotProvider.SOCCERWAY)).toEqual({
        databaseName: 'Afghanistan',
        code2: SoccerBotCountryCode2.AF,
        code3: SoccerBotCountryCode3.AFG
      });
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceCountry('whatever', SoccerBotProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });

  describe('eurofotbal', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghánistán', SoccerBotProvider.EUROFOTBAL)).toEqual({
        databaseName: 'Afghanistan',
        code2: SoccerBotCountryCode2.AF,
        code3: SoccerBotCountryCode3.AFG
      });
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.EUROFOTBAL)).toEqual(undefined);
    });
  });

  describe('sportnet', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afganistan', SoccerBotProvider.SPORTNET)).toEqual({
        databaseName: 'Afghanistan',
        code2: SoccerBotCountryCode2.AF,
        code3: SoccerBotCountryCode3.AFG
      });
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', SoccerBotProvider.SPORTNET)).toEqual(undefined);
      expect(coerceCountry('', SoccerBotProvider.SPORTNET)).toEqual(undefined);
      expect(coerceCountry('999999', SoccerBotProvider.SPORTNET)).toEqual(undefined);
    });
  });
});
