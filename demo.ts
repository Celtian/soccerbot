import { argv } from 'process';
import { fotbalunas, soccerway, transfermarkt } from './lib';

const selector = argv[2];

const transfermarktDemo = (): void => {
  console.log('⚽⚽⚽ Transfermarkt demo ⚽⚽⚽');

  console.log(transfermarkt.leagueUrl('TS1')); // CZE-1 - current season
  console.log(transfermarkt.leagueUrl('TS1', '2018')); // CZE-1 - season 2018
  transfermarkt.league('TS1').then((res) => console.log(res));

  console.log(transfermarkt.teamUrl('62')); // Slavia Prague - current season
  console.log(transfermarkt.teamUrl('62', '2018')); // Slavia Prague - season 2018
  transfermarkt.team('62').then((res) => console.log(res));
};

const soccerwayDemo = (): void => {
  console.log('⚽⚽⚽ Soccerway demo ⚽⚽⚽');

  console.log(soccerway.leagueUrl('r59164', '20202021')); // CZE-1 - season 2020 - 2021
  soccerway.league('r59164', '20202021').then((res) => console.log(res));

  console.log(soccerway.teamUrl('533')); // Slavia Prague - current season
  soccerway.team('533').then((res) => console.log(res));

  console.log(soccerway.playerUrl('193498')); // player
  soccerway.player('193498').then((res) => console.log(res)); // player
};

const fotbalunasDemo = (): void => {
  console.log('⚽⚽⚽ Fotbalunas demo ⚽⚽⚽');

  console.log(fotbalunas.leagueUrl('31')); // CZE-4
  fotbalunas.league('31').then((res) => console.log(res));

  console.log(fotbalunas.teamUrl('62')); // SK Klatovy 1898
  fotbalunas.team('62').then((res) => console.log(res));
};

const main = (selector: string): void => {
  switch (selector) {
    case 'transfermarkt':
      transfermarktDemo();
      break;
    case 'soccerway':
      soccerwayDemo();
      break;
    case 'fotbalunas':
      fotbalunasDemo();
      break;
    default:
      transfermarktDemo();
      soccerwayDemo();
      fotbalunasDemo();
      break;
  }
};

main(selector);
