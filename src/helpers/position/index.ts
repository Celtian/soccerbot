import { SoccerBotPositionGroup } from '../../shared/interfaces';

export const coercePositionGroup = (position: string): SoccerBotPositionGroup => {
  if (['Goalkeeper', 'Brankář', 'Brankáři', 'Brankári'].includes(position)) {
    return SoccerBotPositionGroup.GOALKEEPER;
  } else if (
    ['Centre-Back', 'Left-Back', 'Right-Back', 'Defender', 'Obránce', 'Obránci', 'Obrancovia'].includes(position)
  ) {
    return SoccerBotPositionGroup.DEFENDER;
  } else if (
    [
      'Defensive Midfield',
      'Central Midfield',
      'Right Midfield',
      'Left Midfield',
      'Attacking Midfield',
      'Midfielder',
      'Záložník',
      'Záložníci'
    ].includes(position)
  ) {
    return SoccerBotPositionGroup.MIDFIELDER;
  } else if (['Left Winger', 'Right Winger', 'Centre-Forward', 'Attacker', 'Útočník', 'Útočníci'].includes(position)) {
    return SoccerBotPositionGroup.ATTACKER;
  }
  return undefined;
};
