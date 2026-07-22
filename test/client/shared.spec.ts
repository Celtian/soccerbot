import fetch from 'cross-fetch';
import { vi } from 'vitest';
import { SoccerBotClient, UserAgents } from '../../src/clients/shared';
import { SoccerBotPlayer, SoccerBotResponse, SoccerBotTeam } from '../../src/shared/interfaces';

vi.mock('cross-fetch', () => ({ default: vi.fn() }));

class TestClient extends SoccerBotClient {
  public async league(): Promise<SoccerBotResponse<SoccerBotTeam[]>> {
    return { ok: true, data: [] };
  }

  public async team(): Promise<SoccerBotResponse<SoccerBotPlayer[]>> {
    return { ok: true, data: [] };
  }

  public getPage(url: string, silent?: boolean): Promise<string> {
    return this.fetchPage(url, silent);
  }
}

describe('SoccerBotClient', () => {
  const fetchMock = vi.mocked(fetch);
  let client: TestClient;

  beforeEach(() => {
    client = new TestClient();
    fetchMock.mockReset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch a page with a browser user agent', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    fetchMock.mockResolvedValue({
      status: 200,
      text: vi.fn().mockResolvedValue('<html>Success</html>')
    } as any);

    await expect(client.getPage('https://example.com')).resolves.toBe('<html>Success</html>');
    expect(fetchMock).toHaveBeenCalledWith('https://example.com', {
      headers: { 'User-Agent': UserAgents.Windows1 }
    });
  });

  it('should report an HTTP error and return the error sentinel', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    fetchMock.mockResolvedValue({ status: 503 } as any);

    await expect(client.getPage('https://example.com')).resolves.toBe('Error');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Bad response 503 for url: https://example.com' })
    );
  });

  it('should suppress errors for silent requests', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    fetchMock.mockRejectedValue(new Error('Network failure'));

    await expect(client.getPage('https://example.com', true)).resolves.toBe('Error');
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
