import fetch from 'cross-fetch';
import jsdom from 'jsdom';
import { SoccerBotPlayer, SoccerBotResponse, SoccerBotTeam } from '../../shared';

export abstract class SoccerBotClient {
  public abstract league(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotTeam[]>>;

  public abstract team(id: string, season?: string): Promise<SoccerBotResponse<SoccerBotPlayer[]>>;

  protected async fetchPage(url: string): Promise<string> {
    try {
      const response = await fetch(url);
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
    return [].slice.call(
      virtualNode.querySelectorAll(selector)
    )
  }

  protected getTextAndTrim(element: Element): string {
    return element && element.textContent ? element.textContent.trim() : undefined;
  }

  protected getAttributeAndTrim(element: Element, attribute: string): string {
    return element.getAttribute(attribute).trim();
  }
}
