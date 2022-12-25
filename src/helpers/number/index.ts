export const coerceNumber = (stringValue: string, min: number, max: number): number => {
  if (!stringValue) {
    return undefined;
  }
  const numberAsString = stringValue.replace(/\D/g, '');
  if (!numberAsString || Number.isNaN(numberAsString)) {
    return undefined;
  }
  const value = Number(numberAsString);
  if (value >= min && value <= max) {
    return value;
  }
  return undefined;
};

export const coerceJerseyNumber = (jerseyNumber: string): number => {
  return coerceNumber(jerseyNumber, 1, 99);
};

export const coerceHeight = (height: string): number => {
  return coerceNumber(height, 100, 300);
};

export const coerceWeight = (height: string): number => {
  return coerceNumber(height, 50, 150);
};

export const coerceMinutesPlayed = (height: string): number => {
  return coerceNumber(height, 0, 10000);
};
