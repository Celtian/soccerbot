import { coercePositionGroup } from '../../lib/helpers/position';
import { SoccerBotPositionGroup } from '../../lib/shared/interfaces';

describe('coercePositionGroup', () => {
  it('should return goalkeeper', () => {
    expect(coercePositionGroup('Goalkeeper')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankář')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankáři')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankári')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
  });

  it('should return defender', () => {
    expect(coercePositionGroup('Centre-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Left-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Right-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Defender')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obránce')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obránci')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obrancovia')).toEqual(SoccerBotPositionGroup.DEFENDER);
  });

  it('should return midfielder', () => {
    expect(coercePositionGroup('Defensive Midfield')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Central Midfield')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Right Midfield')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Left Midfield')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Attacking Midfield')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Midfielder')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Záložník')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Záložníci')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
  });

  it('should return attacker', () => {
    expect(coercePositionGroup('Left Winger')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Right Winger')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Centre-Forward')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Attacker')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Útočník')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Útočníci')).toEqual(SoccerBotPositionGroup.ATTACKER);
  });

  it('should return undefined', () => {
    expect(coercePositionGroup('xxx')).toEqual(undefined);
    expect(coercePositionGroup('')).toEqual(undefined);
    expect(coercePositionGroup(null)).toEqual(undefined);
    expect(coercePositionGroup(undefined)).toEqual(undefined);
  });
});
