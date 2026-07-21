import {
  SoccerBotEurofotbalClient,
  SoccerBotFotbalunasClient,
  SoccerBotSoccerwayClient,
  SoccerBotSportnetClient,
  SoccerBotTransfermarktClient,
  SoccerBotWorldFootballClient
} from './clients';
export { SoccerBotFoot, SoccerBotPositionDetail, SoccerBotPositionGroup } from './shared/interfaces';

export const transfermarkt = new SoccerBotTransfermarktClient();
export const soccerway = new SoccerBotSoccerwayClient();
export const fotbalunas = new SoccerBotFotbalunasClient();
export const eurofotbal = new SoccerBotEurofotbalClient();
export const sportnet = new SoccerBotSportnetClient();
export const worldfootball = new SoccerBotWorldFootballClient();
