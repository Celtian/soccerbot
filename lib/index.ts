import {
  SoccerBotEurofotbalClient,
  SoccerBotFotbalunasClient,
  SoccerBotSoccerwayClient,
  SoccerBotTransfermarktClient
} from './clients';

export const transfermarkt = new SoccerBotTransfermarktClient();
export const soccerway = new SoccerBotSoccerwayClient();
export const fotbalunas = new SoccerBotFotbalunasClient();
export const eurofotbal = new SoccerBotEurofotbalClient();
