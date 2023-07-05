import fetch from 'cross-fetch';
import { SoccerBotPlayer, SoccerBotResponse, SoccerBotTeam } from '../../shared/interfaces';

// see: https://www.whatismybrowser.com/guides/the-latest-user-agent/chrome
export enum UserAgents {
  Windows1 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  Windows2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  Windows3 = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  MacOS = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  Linux = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  Iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/114.0.5735.124 Mobile/15E148 Safari/604.1',
  Ipad = 'Mozilla/5.0 (iPad; CPU OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/114.0.5735.124 Mobile/15E148 Safari/604.1',
  Ipod = 'Mozilla/5.0 (iPod; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/114.0.5735.124 Mobile/15E148 Safari/604.1',
  Android = 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 Mobile Safari/537.36',
  AndroidSamsung = 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 Mobile Safari/537.36',
  AndroidLg = 'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 Mobile Safari/537.36'
}

export abstract class SoccerBotClient {
  protected userAgents: UserAgents[] = Object.values(UserAgents);

  public abstract league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>>;

  public abstract team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>>;

  protected async fetchPage(url: string): Promise<string> {
    try {
      const headers = {
        'User-Agent': this.userAgents[Math.floor(Math.random() * this.userAgents.length)]
      };
      const response = await fetch(url, { headers });
      if (response.status >= 400 && response.status < 600) {
        throw new Error(`Bad response ${response.status} for url: ${url}`);
      }
      return await response.text();
    } catch (e) {
      console.error(e);
      return 'Error';
    }
  }
}
