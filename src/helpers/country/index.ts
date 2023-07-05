import { COUNTRY, SoccerBotCountryData } from '../../shared/countries';
import { SoccerBotCountry, SoccerBotProvider } from '../../shared/interfaces';

const findCountry = (value: string, type: SoccerBotProvider): SoccerBotCountryData => {
  if (!value) {
    return undefined;
  }
  switch (type) {
    case SoccerBotProvider.TRANSFERMARKT:
      return COUNTRY.find((i) => Number(i.transfermarkt) === Number(value));
    case SoccerBotProvider.SOCCERWAY:
      return COUNTRY.find((i) => i.soccerway === value);
    case SoccerBotProvider.EUROFOTBAL:
      return COUNTRY.find((i) => i.eurofotbal === value);
    case SoccerBotProvider.SPORTNET:
      return COUNTRY.find((i) => i.sportnet === value);
    default:
      return undefined;
  }
};

export const coerceCountry = (value: string, type: SoccerBotProvider): SoccerBotCountry => {
  const country = findCountry(value, type);
  if (!country || !country?.databasename || !country?.code2 || !country?.code3) {
    return undefined;
  }
  return {
    databaseName: country.databasename,
    code2: country.code2,
    code3: country.code3
  };
};
