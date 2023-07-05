import { readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';

type CountryData = Record<string, string>;

const convertCSVtoJSON = (csvData: string): CountryData[] => {
  const lines = csvData.split('\n');
  const headers = lines[0].split(';');
  const jsonData: CountryData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim(); // Trim leading/trailing spaces

    if (line === '') {
      continue; // Skip empty lines
    }

    const values = line.split(';');
    if (values.length !== headers.length) {
      console.error(`CSV data is not formatted correctly in line ${i + 1}.`);
      console.error(`Expected ${headers.length} values but found ${values.length} values.`);
      console.error('Line:', lines[i]);
      throw new Error('CSV data is not formatted correctly.');
    }

    const country: CountryData = {} as CountryData;
    for (let j = 0; j < headers.length; j++) {
      country[headers[j]] = values[j];
    }

    jsonData.push(country);
  }

  return jsonData;
};

const createSortedEnum = (jsonData: CountryData[], enumKey: string): Record<string, string> => {
  const enumObj = {} as Record<string, string>;
  jsonData.forEach((country) => {
    enumObj[country[enumKey]] = country[enumKey];
  });

  const sortedKeys = Object.keys(enumObj).sort();
  const enumResult = {} as Record<string, string>;
  sortedKeys.forEach((key) => {
    enumResult[key] = key;
  });

  return enumResult;
};

// Read CSV file
const csvData = readFileSync(join(__dirname, '..', 'data', 'source.csv'), 'utf-8');

// Convert CSV to JSON
const jsonData = convertCSVtoJSON(csvData);

const code2enum = createSortedEnum(jsonData, 'code2');

const code3enum = createSortedEnum(jsonData, 'code3');

// Write JSON to file
const fileToPatch = join(__dirname, '..', 'src', 'shared', 'countries.ts');

writeFileSync(
  fileToPatch,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED!
/* 'eslint-disable'} */
export enum SoccerBotCountryCode2 {
${Object.entries(code2enum)
  .map(([key, value]) => `  ${value} = '${key}',`)
  .join('\n')}
}

export enum SoccerBotCountryCode3 {
${Object.entries(code3enum)
  .map(([key, value]) => `  ${value} = '${key}',`)
  .join('\n')}
}

export interface SoccerBotCountryData {
  databasename: string;
  code2: SoccerBotCountryCode2;
  code3: SoccerBotCountryCode3;
  transfermarkt: string;
  soccerway: string;
  eurofotbal: string;
  sportnet: string;
}

export const COUNTRY: SoccerBotCountryData[] = [
${jsonData
  .map(
    (country) => `  {
    databasename: '${country.databasename.replace("'", "\\'")}',
    code2: SoccerBotCountryCode2.${country.code2},
    code3: SoccerBotCountryCode3.${country.code3},
    transfermarkt: '${country.transfermarkt.replace("'", "\\'")}',
    soccerway: '${country.soccerway.replace("'", "\\'")}',
    eurofotbal: '${country.eurofotbal.replace("'", "\\'")}',
    sportnet: '${country.sportnet.replace("'", "\\'")}'
  }`
  )
  .join(',\n')}
];
/* 'eslint-enable'} */
`,
  'utf-8'
);

console.log('Conversion complete.');
