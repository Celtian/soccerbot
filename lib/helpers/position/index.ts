import { SoccerBotPositionGroup } from '../../shared';

export const coercePositionGroup = (position: string): SoccerBotPositionGroup => {
  if (['Goalkeeper', 'Brankář'].includes(position)) {
    return SoccerBotPositionGroup.GOALKEEPER;
  } else if (['Centre-Back', 'Left-Back', 'Right-Back', 'Defender', 'Obránce'].includes(position)) {
    return SoccerBotPositionGroup.DEFENDER;
  } else if (
    [
      'Defensive Midfield',
      'Central Midfield',
      'Right Midfield',
      'Left Midfield',
      'Attacking Midfield',
      'Midfielder',
      'Záložník'
    ].includes(position)
  ) {
    return SoccerBotPositionGroup.MIDFIELDER;
  } else if (['Left Winger', 'Right Winger', 'Centre-Forward', 'Attacker', 'Útočník'].includes(position)) {
    return SoccerBotPositionGroup.ATTACKER;
  }
  return undefined;
};
