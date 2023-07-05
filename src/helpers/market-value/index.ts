export const coerceMarketValue = (value: string): number => {
  if (!value) {
    return undefined;
  }
  const match = value.match(/€(?<value>(\d+)(\.(\d+))?)((?<thousandsNew>k)|(?<thousands>Th)\.|(?<millions>m))/);
  if (!match) {
    return undefined;
  }
  if (match.groups.value && Number(match.groups.value) && match.groups.thousandsNew) {
    return Number(match.groups.value) * 1000;
  }
  if (match.groups.value && Number(match.groups.value) && match.groups.thousands) {
    return Number(match.groups.value) * 1000;
  }
  if (match.groups.value && Number(match.groups.value) && match.groups.millions) {
    return Number(match.groups.value) * 1000 * 1000;
  }
  return undefined;
};
