import { SoccerBotCountry, SoccerBotPlayer, SoccerBotResponse } from '../../../lib/shared';

export const PLAYER_HTML = `
{"__uri__": "http://futbalnet.bart.sk:9300/persons/1306959", "id": "1306959", "name": "Matej", "surname": "Koll\u00e1th", "regnr": "1306959", "photo": {"description": "Matej Koll\u00e1th", "url": "http://futbalnet.bart.sk:9300/images/246618", "urlpattern": "https://static.futbalnet.sk/images/usp/__base__/24/66/18/246618.jpg"}, "isPublic": true, "sex": "M", "country": "Slovensko", "card": {"number": "021169901002", "validity": "2023-07-31", "ordered": "2018-07-31"}, "profiles": [{"__uri__": "http://futbalnet.bart.sk:9300/players/1306959", "profileId": "1306959", "type": "PLAYER", "person": {"__uri__": "http://futbalnet.bart.sk:9300/persons/1306959", "id": "1306959", "regnr": "1306959"}, "typSportu": 21}], "birthdate": "2002-08-11", "datumClenskehoOd": "2021-07-01", "datumClenskehoDo": "2022-06-30"}
`;

export const PLAYER_DATA: SoccerBotResponse<SoccerBotPlayer> = {
  ok: true,
  data: {
    id: '1306959',
    firstName: 'Matej',
    lastName: 'Kolláth',
    name: 'Matej Kolláth',
    birthdate: '2002-08-11',
    country: SoccerBotCountry.SLOVAKIA
  }
};
