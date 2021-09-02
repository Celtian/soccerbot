import { EUROFOTBAL_COUNTRY, SOCCERWAY_COUNTRY, TRANSFERMARKT_COUNTRY } from '../../shared/constants';
import { SoccerBotCountry, SoccerBotProvider } from '../../shared/interfaces';

export const coerceCountry = (value: string, type: SoccerBotProvider): SoccerBotCountry => {
  switch (type) {
    case SoccerBotProvider.TRANSFERMARKT:
      return TRANSFERMARKT_COUNTRY[Number(value)];
    case SoccerBotProvider.SOCCERWAY:
      return SOCCERWAY_COUNTRY[value];
    case SoccerBotProvider.EUROFOTBAL:
      return EUROFOTBAL_COUNTRY[value];
    default:
      return undefined;
  }
};
