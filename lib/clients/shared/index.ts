import fetch from 'cross-fetch';
import jsdom from 'jsdom';
import { SoccerBotPlayer, SoccerBotResponse, SoccerBotTeam } from '../../shared';

const USER_AGENTS: string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36'
];

export abstract class SoccerBotClient {
  public abstract league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>>;

  public abstract team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>>;

  protected async fetchPage(url: string): Promise<string> {
    try {
      const headers = {
        'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
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

  protected nodeDOM(response: string): Document {
    const { JSDOM } = jsdom;
    return new JSDOM(response).window.document;
  }

  protected selectArray(virtualNode: Document, selector: string): HTMLTableRowElement[] {
    return [].slice.call(virtualNode.querySelectorAll(selector));
  }

  protected getTextAndTrim(element: Element): string {
    return element && element.textContent ? element.textContent.trim() : undefined;
  }

  protected getAttributeAndTrim(element: Element, attribute: string): string {
    return element.getAttribute(attribute)?.trim();
  }
}
