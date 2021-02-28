import { SoccerBotPositionGroup } from "../../shared";

export const coercePositionGroup = (position: string): SoccerBotPositionGroup  => {
  if(['Goalkeeper'].includes(position)) {
    return SoccerBotPositionGroup.GOALKEEPER;
  } else if([
    'Centre-Back',
    'Left-Back',
    'Right-Back',
    'Defender'
  ].includes(position)) {
    return SoccerBotPositionGroup.DEFENDER;
  } else if([
    'Defensive Midfield',
    'Central Midfield',
    'Right Midfield',
    'Left Midfield',
    'Attacking Midfield',
    'Midfielder'
  ].includes(position)) {
    return SoccerBotPositionGroup.MIDFIELDER;
  } else if([
    'Left Winger',
    'Right Winger',
    'Centre-Forward',
    'Attacker'
  ].includes(position)) {
    return SoccerBotPositionGroup.ATTACKER;
  }
  return undefined;
}
