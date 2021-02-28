export const coerceMarketValue = (value: string): number => {
  if(!value) {
    return undefined;
  }
  const match = value.match(/€(?<value>(\d+)(\.(\d+))?)((?<thousands>Th)\.|(?<millions>m))/)
  if(!match) {
    return undefined;
  }
  if(match.groups.thousands) {
    return Number(match.groups.value) * 1000;
  }
  if(match.groups.millions) {
    return Number(match.groups.value) * 1000 * 1000;
  }
  return undefined;
}
