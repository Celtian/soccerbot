<p align="center">
  <a href="https://github.com/Celtian/soccerbot" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">SoccerBot</h1>
</p>

[![npm version](https://badge.fury.io/js/soccerbot.svg)](https://badge.fury.io/js/soccerbot)
[![Build & Publish](https://github.com/celtian/soccerbot/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/soccerbot/actions)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

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

_Go to command line and type_

```terminal
import { soccerway, transfermarkt } from 'soccerbot';

console.log(soccerway.teamUrl('533')); // show url

soccerway.team('533')
  .then(res => console.log(res));

console.log(transfermarkt.teamUrl('62')); // show url

transfermarkt.team('62')
  .then(res => console.log(res));
```

_Note: Soccerway is taking data from multiple pages, so it takes longer period of time. The reason is to prevent rare limit (30 sec on average)._

## License

Copyright &copy; 2021 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
