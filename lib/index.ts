import { SoccerBotSoccerwayClient as SoccerBotSoccerwayClient, SoccerBotTransfermarktClient } from './clients';

export const transfermarkt = new SoccerBotTransfermarktClient();
export const soccerway = new SoccerBotSoccerwayClient();

