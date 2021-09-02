import { SoccerBotProvider } from '../../shared/interfaces';

const MONTH_SHORT: { [key: string]: number } = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12
};

const MONTH_LONG: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};

const MONTH_NUMBER: { [key: string]: number } = {
  '01': 1,
  '02': 2,
  '03': 3,
  '04': 4,
  '05': 5,
  '06': 6,
  '07': 7,
  '08': 8,
  '09': 9,
  '10': 10,
  '11': 11,
  '12': 12
};

const corceDateByRegExp = (date: string, regExp: RegExp, months: { [key: string]: number }): string => {
  if (!date) {
    return undefined;
  }
  const match = date.match(regExp);
  if (!match) {
    return undefined;
  }
  const year =
    !Number.isNaN(match.groups.year) && Number(match.groups.year) > 1800 && Number(match.groups.year) < 2200
      ? Number(match.groups.year)
      : undefined;
  const month = months[match.groups.month];
  const day =
    !Number.isNaN(match.groups.day) && Number(match.groups.day) > 0 && Number(match.groups.day) <= 31
      ? Number(match.groups.day)
      : undefined;
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
};

export const coerceDate = (date: string, type: SoccerBotProvider): string => {
  let regExp: RegExp;
  switch (type) {
    case SoccerBotProvider.TRANSFERMARKT:
      regExp = new RegExp(
        '(?<month>(' + Object.keys(MONTH_SHORT).join('|') + '))\\s(?<day>\\d{1,2}),\\s(?<year>\\d{4})'
      );
      return corceDateByRegExp(date, regExp, MONTH_SHORT);
    case SoccerBotProvider.SOCCERWAY:
      regExp = new RegExp('(?<day>\\d{1,2})\\s(?<month>(' + Object.keys(MONTH_LONG).join('|') + '))\\s(?<year>\\d{4})');
      return corceDateByRegExp(date, regExp, MONTH_LONG);
    case SoccerBotProvider.EUROFOTBAL:
      regExp = new RegExp('(?<day>\\d{1,2}).(?<month>\\d{1,2}).(?<year>\\d{4})');
      return corceDateByRegExp(date, regExp, MONTH_NUMBER);
    default:
      return undefined;
  }
};
