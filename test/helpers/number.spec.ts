import {
  coerceHeight,
  coerceJerseyNumber,
  coerceMinutesPlayed,
  coerceNumber,
  coerceWeight
} from '../../lib/helpers/number';

describe('coerceNumber', () => {
  it('should return correct value', () => {
    expect(coerceNumber('1', 1, 99)).toEqual(1);
    expect(coerceNumber('99', 1, 99)).toEqual(99);
    expect(coerceNumber('50', 1, 99)).toEqual(50);
  });

  it('should return undefined', () => {
    expect(coerceNumber('xxx', 1, 99)).toEqual(undefined);
    expect(coerceNumber('', 1, 99)).toEqual(undefined);
    expect(coerceNumber('0', 1, 99)).toEqual(undefined);
    expect(coerceNumber('100', 1, 99)).toEqual(undefined);
    expect(coerceNumber(null, 1, 99)).toEqual(undefined);
    expect(coerceNumber(undefined, 1, 99)).toEqual(undefined);
  });
});

describe('coerceJerseyNumber', () => {
  it('should return correct value', () => {
    expect(coerceJerseyNumber('1')).toEqual(1);
    expect(coerceJerseyNumber('99')).toEqual(99);
    expect(coerceJerseyNumber('50')).toEqual(50);
  });

  it('should return undefined', () => {
    expect(coerceJerseyNumber('xxx')).toEqual(undefined);
    expect(coerceJerseyNumber('')).toEqual(undefined);
    expect(coerceJerseyNumber('0')).toEqual(undefined);
    expect(coerceJerseyNumber('100')).toEqual(undefined);
    expect(coerceJerseyNumber(null)).toEqual(undefined);
    expect(coerceJerseyNumber(undefined)).toEqual(undefined);
  });
});
describe('coerceHeight', () => {
  it('should return correct value', () => {
    expect(coerceHeight('100')).toEqual(100);
    expect(coerceHeight('300')).toEqual(300);
    expect(coerceHeight('200')).toEqual(200);
  });

  it('should return undefined', () => {
    expect(coerceHeight('xxx')).toEqual(undefined);
    expect(coerceHeight('')).toEqual(undefined);
    expect(coerceHeight('0')).toEqual(undefined);
    expect(coerceHeight('1000')).toEqual(undefined);
    expect(coerceHeight(null)).toEqual(undefined);
    expect(coerceHeight(undefined)).toEqual(undefined);
  });
});
describe('coerceWeight', () => {
  it('should return correct value', () => {
    expect(coerceWeight('50')).toEqual(50);
    expect(coerceWeight('150')).toEqual(150);
    expect(coerceWeight('100')).toEqual(100);
  });

  it('should return undefined', () => {
    expect(coerceWeight('xxx')).toEqual(undefined);
    expect(coerceWeight('')).toEqual(undefined);
    expect(coerceWeight('0')).toEqual(undefined);
    expect(coerceWeight('1000')).toEqual(undefined);
    expect(coerceWeight(null)).toEqual(undefined);
    expect(coerceWeight(undefined)).toEqual(undefined);
  });
});
describe('coerceMinutesPlayed', () => {
  it('should return correct value', () => {
    expect(coerceMinutesPlayed('0')).toEqual(0);
    expect(coerceMinutesPlayed('10000')).toEqual(10000);
    expect(coerceMinutesPlayed('90')).toEqual(90);
  });

  it('should return undefined', () => {
    expect(coerceMinutesPlayed('xxx')).toEqual(undefined);
    expect(coerceMinutesPlayed('')).toEqual(undefined);
    expect(coerceMinutesPlayed('10000000')).toEqual(undefined);
    expect(coerceMinutesPlayed(null)).toEqual(undefined);
    expect(coerceMinutesPlayed(undefined)).toEqual(undefined);
  });
});
