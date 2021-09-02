import { coerceMarketValue } from '../../lib/helpers/market-value';

describe('coerceMarketValue', () => {
  it('should return millions', () => {
    expect(coerceMarketValue('€180.50m')).toEqual(180500000);
    expect(coerceMarketValue('€180m')).toEqual(180000000);
  });

  it('should return thousands', () => {
    expect(coerceMarketValue('€180.50Th.')).toEqual(180500);
    expect(coerceMarketValue('€180Th.')).toEqual(180000);
  });

  it('should return undefined', () => {
    expect(coerceMarketValue('xxx')).toEqual(undefined);
    expect(coerceMarketValue('')).toEqual(undefined);
    expect(coerceMarketValue(null)).toEqual(undefined);
    expect(coerceMarketValue(undefined)).toEqual(undefined);
    expect(coerceMarketValue('€0m')).toEqual(undefined);
    expect(coerceMarketValue('€0Th.')).toEqual(undefined);
  });
});
