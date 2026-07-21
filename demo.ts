import { argv } from 'process';
import { eurofotbal, fotbalunas, soccerway, sportnet, transfermarkt, worldfootball } from './src';

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

  console.log(soccerway.leagueUrl('czech-republic/chance-liga/standings/bNFMkskm')); // CZE-1
  console.log(await soccerway.league('czech-republic/chance-liga/standings/bNFMkskm'));

  console.log(soccerway.teamUrl('slavia-prague/viXGgnyB')); // Slavia Prague - current season
  console.log(await soccerway.team('slavia-prague/viXGgnyB'));

  console.log(soccerway.playerUrl('kolar-ondrej/xfBGcS1U')); // Ondrej Kolar
  console.log(await soccerway.player('kolar-ondrej/xfBGcS1U'));
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

  console.log(eurofotbal.leagueUrl('chance-liga'));
  console.log(await eurofotbal.league('chance-liga'));

  console.log(eurofotbal.teamUrl('cesko/slavia-praha'));
  console.log(await eurofotbal.team('cesko/slavia-praha'));
};

const sportnetDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ Sportnet demo ⚽⚽⚽');

  console.log(sportnet.leagueUrl('sfz/s/monacobet-liga'));
  console.log(await sportnet.league('sfz/s/monacobet-liga'));

  console.log(sportnet.teamUrl('fk-inter-bratislava-1/tim/dospeli-m-a'));
  console.log(await sportnet.team('fk-inter-bratislava-1/tim/dospeli-m-a'));

  console.log(sportnet.playerUrl('1306959'));
  console.log(await sportnet.player('1306959'));
};

const worldfootballDemo = async (): Promise<void> => {
  console.log('⚽⚽⚽ WorldFootball demo ⚽⚽⚽');

  console.log(worldfootball.leagueUrl('co7093/mexico-lp---serie-b')); // Mexico LP - Serie B
  console.log(await worldfootball.league('co7093/mexico-lp---serie-b'));

  console.log(worldfootball.teamUrl('te237557/artesanos-metepec')); // Artesanos Metepec squad
  console.log(await worldfootball.team('te237557/artesanos-metepec'));

  console.log(worldfootball.playerUrl('pe599828/oscar-altamirano')); // Oscar Altamirano
  console.log(await worldfootball.player('pe599828/oscar-altamirano'));
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
    case 'worldfootball':
      await worldfootballDemo();
      break;
    default:
      await transfermarktDemo();
      await soccerwayDemo();
      await fotbalunasDemo();
      await eurofotbalDemo();
      await sportnetDemo();
      await worldfootballDemo();
      break;
  }
};

// tslint:disable-next-line: no-floating-promises
main(selector);
