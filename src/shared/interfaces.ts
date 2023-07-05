import { SoccerBotCountryCode2, SoccerBotCountryCode3 } from './countries';

export enum SoccerBotFoot {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
}

export enum SoccerBotPositionGroup {
  GOALKEEPER = 'GOALKEEPER',
  DEFENDER = 'DEFENDER',
  MIDFIELDER = 'MIDFIELDER',
  ATTACKER = 'ATTACKER'
}

export interface SoccerBotResponse<T> {
  ok: boolean;
  data?: T;
  errors?: any;
}

export interface SoccerBotTeam {
  id: string;
  name: string;
}

export interface SoccerBotCountry {
  databaseName: string;
  code2: SoccerBotCountryCode2;
  code3: SoccerBotCountryCode3;
}

export interface SoccerBotPlayer {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  jerseyNumber?: number;
  position?: SoccerBotPositionGroup;
  birthdate?: string;
  height?: number;
  weight?: number;
  foot?: SoccerBotFoot;
  joined?: string;
  contractExpires?: string;
  marketValue?: number;
  country?: SoccerBotCountry;
  minutesPlayed?: number;
}

export enum SoccerBotProvider {
  TRANSFERMARKT = 'TRANSFERMARKT',
  SOCCERWAY = 'SOCCERWAY',
  FOTBALUNAS = 'FOTBALUNAS',
  EUROFOTBAL = 'EUROFOTBAL',
  SPORTNET = 'SPORTNET'
}
