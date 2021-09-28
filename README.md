<p align="center">
  <a href="https://github.com/Celtian/soccerbot" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">SoccerBot</h1>
</p>

[![npm version](https://badge.fury.io/js/soccerbot.svg)](https://badge.fury.io/js/soccerbot)
[![Package License](https://img.shields.io/npm/l/soccerbot.svg)](https://www.npmjs.com/soccerbot)
[![NPM Downloads](https://img.shields.io/npm/dm/soccerbot.svg)](https://www.npmjs.com/soccerbot)
[![Build & Publish](https://github.com/celtian/soccerbot/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/soccerbot/actions)
[![codecov](https://codecov.io/gh/Celtian/soccerbot/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/soccerbot/)
[![stars](https://badgen.net/github/stars/celtian/soccerbot)](https://github.com/celtian/soccerbot/)
[![forks](https://badgen.net/github/forks/celtian/soccerbot)](https://github.com/celtian/soccerbot/)
[![HitCount](http://hits.dwyl.com/celtian/soccerbot.svg)](http://hits.dwyl.com/celtian/soccerbot)

> Library for scraping soccer data from the internet

## Install

_Nodejs 12 or higher need to be installed first_

```terminal
npm install soccerbot
```

or

```terminal
yarn add soccerbot
```

## Quick start

_Type this into your ts file._

```terminal
import { soccerway, transfermarkt, fotbalunas, eurofotbal, sportnet } from 'soccerbot';

console.log(soccerway.teamUrl('533')); // show url

soccerway.team('533')
  .then(res => console.log(res));

console.log(transfermarkt.teamUrl('62')); // show url

transfermarkt.team('62')
  .then(res => console.log(res));

console.log(fotbalunas.teamUrl('62')); // show url

fotbalunas.team('62')
  .then(res => console.log(res));

console.log(eurofotbal.teamUrl('cesko/sparta-praha')); // show url

eurofotbal.team('cesko/sparta-praha')
  .then(res => console.log(res));

console.log(sportnet.teamUrl('fk-inter-bratislava/tim/46770')); // show url

sportnet.team('fk-inter-bratislava/tim/46770')
  .then(res => console.log(res));
```

## Sources

| Source            | Speed  | Stability | Coverage       |
| ----------------- | ------ | --------- | -------------- |
| **transfermarkt** | ⚽⚽⚽ | ⚽⚽⚽    | World          |
| **soccerway**     | ⚽     | ⚽        | World          |
| **fotbalunas**    | ⚽     | ⚽⚽⚽    | Czech Republic |
| **eurofotbal**    | ⚽⚽   | ⚽⚽      | Europe         |
| **sportnet**      | ⚽     | ⚽        | Slovakia       |

_Note: Soccerway, Fotbalunas and sportnet is taking data from multiple pages, so it takes longer period of time. The reason is to prevent rare limit (30 sec on average)._

## License

Copyright &copy; 2021 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
