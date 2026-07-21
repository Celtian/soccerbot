import { SoccerBotFoot, SoccerBotPositionDetail, SoccerBotPositionGroup } from '../../src';
import { coercePositionDetail, coercePositionGroup } from '../../src/helpers/position';

describe('coercePositionDetail', () => {
  it.each([
    ['Goalkeeper', SoccerBotPositionDetail.GK],
    ['Sweeper', SoccerBotPositionDetail.SW],
    ['Centre-Back', SoccerBotPositionDetail.CB],
    ['Left-Back', SoccerBotPositionDetail.LB],
    ['Right-Back', SoccerBotPositionDetail.RB],
    ['Defensive Midfield', SoccerBotPositionDetail.CDM],
    ['Central Midfield', SoccerBotPositionDetail.CM],
    ['Right Midfield', SoccerBotPositionDetail.RM],
    ['Left Midfield', SoccerBotPositionDetail.LM],
    ['Attacking Midfield', SoccerBotPositionDetail.CAM],
    ['Mediocentro ofensivo', SoccerBotPositionDetail.CAM],
    ['Left Winger', SoccerBotPositionDetail.LW],
    ['Right Winger', SoccerBotPositionDetail.RW],
    ['Second Striker', SoccerBotPositionDetail.CF],
    ['Centre-Forward', SoccerBotPositionDetail.ST]
  ])('should map %s to %s', (position, expected) => {
    expect(coercePositionDetail(position)).toEqual(expected);
  });

  it.each(['Defender', 'Midfielder', 'Forward', 'Attacker', 'xxx', '', null, undefined])(
    'should return undefined for %s',
    (position) => {
      expect(coercePositionDetail(position)).toEqual(undefined);
    }
  );

  it('should export the enum from the package root', () => {
    expect(SoccerBotFoot.RIGHT).toEqual('RIGHT');
    expect(SoccerBotPositionDetail.GK).toEqual('GK');
    expect(SoccerBotPositionDetail.RCB).toEqual('RCB');
    expect(SoccerBotPositionDetail.ST).toEqual('ST');
    expect(SoccerBotPositionGroup.GOALKEEPER).toEqual('GOALKEEPER');
  });
});

describe('coercePositionGroup', () => {
  it('should return goalkeeper', () => {
    expect(coercePositionGroup('Goalkeeper')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankář')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankáři')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Brankári')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
    expect(coercePositionGroup('Portero')).toEqual(SoccerBotPositionGroup.GOALKEEPER);
  });

  it('should return defender', () => {
    expect(coercePositionGroup('Centre-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Left-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Right-Back')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Defender')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obránce')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obránci')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Obrancovia')).toEqual(SoccerBotPositionGroup.DEFENDER);
    expect(coercePositionGroup('Defensa')).toEqual(SoccerBotPositionGroup.DEFENDER);
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
    expect(coercePositionGroup('Mediocampista')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Mediocentro ofensivo')).toEqual(SoccerBotPositionGroup.MIDFIELDER);
  });

  it('should return attacker', () => {
    expect(coercePositionGroup('Left Winger')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Right Winger')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Centre-Forward')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Forward')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Attacker')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Útočník')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Útočníci')).toEqual(SoccerBotPositionGroup.ATTACKER);
    expect(coercePositionGroup('Atacante')).toEqual(SoccerBotPositionGroup.ATTACKER);
  });

  it('should return undefined', () => {
    expect(coercePositionGroup('xxx')).toEqual(undefined);
    expect(coercePositionGroup('')).toEqual(undefined);
    expect(coercePositionGroup(null)).toEqual(undefined);
    expect(coercePositionGroup(undefined)).toEqual(undefined);
  });
});
