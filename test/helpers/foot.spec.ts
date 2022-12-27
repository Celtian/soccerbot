import { coerceFoot } from '../../src/helpers/foot';
import { SoccerBotFoot } from '../../src/shared/interfaces';

describe('coerceFoot', () => {
  it('should return right', () => {
    expect(coerceFoot('right')).toEqual(SoccerBotFoot.RIGHT);
    expect(coerceFoot('Right')).toEqual(SoccerBotFoot.RIGHT);
  });

  it('should return left', () => {
    expect(coerceFoot('left')).toEqual(SoccerBotFoot.LEFT);
    expect(coerceFoot('Left')).toEqual(SoccerBotFoot.LEFT);
  });

  it('should return undefined', () => {
    expect(coerceFoot('xxx')).toEqual(undefined);
    expect(coerceFoot('')).toEqual(undefined);
    expect(coerceFoot(null)).toEqual(undefined);
    expect(coerceFoot(undefined)).toEqual(undefined);
  });
});
