import { SoccerBotPositionDetail, SoccerBotPositionGroup } from '../../shared/interfaces';

const POSITION_DETAIL: Record<string, SoccerBotPositionDetail> = {
  Goalkeeper: SoccerBotPositionDetail.GK,
  Sweeper: SoccerBotPositionDetail.SW,
  'Centre-Back': SoccerBotPositionDetail.CB,
  'Left-Back': SoccerBotPositionDetail.LB,
  'Right-Back': SoccerBotPositionDetail.RB,
  'Defensive Midfield': SoccerBotPositionDetail.CDM,
  'Central Midfield': SoccerBotPositionDetail.CM,
  'Right Midfield': SoccerBotPositionDetail.RM,
  'Left Midfield': SoccerBotPositionDetail.LM,
  'Attacking Midfield': SoccerBotPositionDetail.CAM,
  'Mediocentro ofensivo': SoccerBotPositionDetail.CAM,
  'Left Winger': SoccerBotPositionDetail.LW,
  'Right Winger': SoccerBotPositionDetail.RW,
  'Second Striker': SoccerBotPositionDetail.CF,
  'Centre-Forward': SoccerBotPositionDetail.ST
};

export const coercePositionDetail = (position: string): SoccerBotPositionDetail => POSITION_DETAIL[position];

export const coercePositionGroup = (position: string): SoccerBotPositionGroup => {
  if (['Goalkeeper', 'Brankář', 'Brankáři', 'Brankári', 'Portero'].includes(position)) {
    return SoccerBotPositionGroup.GOALKEEPER;
  } else if (
    [
      'Centre-Back',
      'Left-Back',
      'Right-Back',
      'Defence',
      'Defender',
      'Obránce',
      'Obránci',
      'Obrancovia',
      'Defensa'
    ].includes(position)
  ) {
    return SoccerBotPositionGroup.DEFENDER;
  } else if (
    [
      'Defensive Midfield',
      'Central Midfield',
      'Right Midfield',
      'Left Midfield',
      'Attacking Midfield',
      'Midfield',
      'Midfielder',
      'Mediocampista',
      'Mediocentro ofensivo',
      'Záložník',
      'Záložníci'
    ].includes(position)
  ) {
    return SoccerBotPositionGroup.MIDFIELDER;
  } else if (
    [
      'Left Winger',
      'Right Winger',
      'Centre-Forward',
      'Forward',
      'Attacker',
      'Útočník',
      'Útočníci',
      'Atacante'
    ].includes(position)
  ) {
    return SoccerBotPositionGroup.ATTACKER;
  }
  return undefined;
};
