import { argv } from 'process';
import { eurofotbal, fotbalunas, soccerway, sportnet, transfermarkt } from './src';

const selector = argv[2];

const transfermarktDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Transfermarkt demo ⚽⚽⚽');

  console.log(transfermarkt.leagueUrl('TS1')); // CZE-1 - current season
  console.log(transfermarkt.leagueUrl('TS1', '2018')); // CZE-1 - season 2018
  console.log(await transfermarkt.league('TS1'));

  console.log(transfermarkt.teamUrl('62')); // Slavia Prague - current season
  console.log(transfermarkt.teamUrl('62', '2018')); // Slavia Prague - season 2018
  console.log(await transfermarkt.team('62'));
};

const soccerwayDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Soccerway demo ⚽⚽⚽');

  console.log(soccerway.leagueUrl('r59164', '20202021')); // CZE-1 - season 2020 - 2021
  console.log(await soccerway.league('r59164', '20202021'));

  console.log(soccerway.teamUrl('533')); // Slavia Prague - current season
  console.log(await soccerway.team('533'));

  console.log(soccerway.playerUrl('193498')); // player
  console.log(await soccerway.player('193498'));
};

const fotbalunasDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Fotbalunas demo ⚽⚽⚽');

  console.log(fotbalunas.leagueUrl('31')); // CZE-4
  console.log(await fotbalunas.league('31'));

  console.log(fotbalunas.teamUrl('62')); // SK Klatovy 1898
  console.log(await fotbalunas.team('62'));
};

const eurofotbalDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Eurofotbal demo ⚽⚽⚽');

  console.log(eurofotbal.leagueUrl('fortuna-liga-cz'));
  console.log(await eurofotbal.league('fortuna-liga-cz'));

  console.log(eurofotbal.teamUrl('cesko/slavia-praha'));
  console.log(await eurofotbal.team('cesko/slavia-praha'));
};

const sportnetDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Sportnet demo ⚽⚽⚽');

  console.log(sportnet.leagueUrl('sfz/s/3528'));
  console.log(await sportnet.league('sfz/s/3528'));

  console.log(sportnet.teamUrl('fk-inter-bratislava/tim/46770'));
  console.log(await sportnet.team('fk-inter-bratislava/tim/46770'));

  console.log(sportnet.playerUrl('1306959'));
  console.log(await sportnet.player('1306959'));
};

// tslint:disable-next-line: no-shadowed-variable
const main = async (selector: string): Promise<void> => {
  switch (selector) {
    case 'transfermarkt':
      await transfermarktDemo();
      break;
    case 'soccerway':
      await soccerwayDemo();
      break;
    case 'fotbalunas':
      await fotbalunasDemo();
      break;
    case 'eurofotbal':
      await eurofotbalDemo();
      break;
    case 'sportnet':
      await sportnetDemo();
      break;
    default:
      await transfermarktDemo();
      await soccerwayDemo();
      await fotbalunasDemo();
      await eurofotbalDemo();
      await sportnetDemo();
      break;
  }
};

// tslint:disable-next-line: no-floating-promises
main(selector);
