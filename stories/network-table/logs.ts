import { NetworkLog } from './types';

const logs: NetworkLog[] = [
  {
    id: '1',
    entry: {
      _initiator: {
        type: 'other',
      },
      _priority: 'VeryHigh',
      _resourceType: 'document',
      cache: {},
      connection: '1831476',
      pageref: 'page_1',
      request: {
        method: 'GET',
        url: 'http://localhost:6006/?path=/story/resourcetable--primary',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br, zstd',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.9',
          },
          {
            name: 'Cache-Control',
            value: 'no-cache',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'DNT',
            value: '1',
          },
          {
            name: 'Host',
            value: 'localhost:6006',
          },
          {
            name: 'Pragma',
            value: 'no-cache',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'document',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'navigate',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'same-origin',
          },
          {
            name: 'Sec-Fetch-User',
            value: '?1',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
          {
            name: 'sec-ch-ua',
            value: '"Chromium";v="131", "Not_A Brand";v="24"',
          },
          {
            name: 'sec-ch-ua-mobile',
            value: '?0',
          },
          {
            name: 'sec-ch-ua-platform',
            value: '"macOS"',
          },
        ],
        queryString: [
          {
            name: 'path',
            value: '/story/resourcetable--primary',
          },
        ],
        cookies: [],
        headersSize: 887,
        bodySize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Access-Control-Allow-Headers',
            value: 'Origin, X-Requested-With, Content-Type, Accept',
          },
          {
            name: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            name: 'Cache-Control',
            value: 'no-store',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Content-Encoding',
            value: 'gzip',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Date',
            value: 'Fri, 03 Jan 2025 12:45:07 GMT',
          },
          {
            name: 'ETag',
            value: 'W/"e00-k97IoawGXwqCFNQFdhy8oQXYHLc"',
          },
          {
            name: 'Keep-Alive',
            value: 'timeout=5',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Vary',
            value: 'Accept-Encoding',
          },
          {
            name: 'X-Powered-By',
            value: 'Express',
          },
        ],
        cookies: [],
        content: {
          size: 3584,
          mimeType: 'text/html',
          compression: 2521,
        },
        redirectURL: '',
        headersSize: 419,
        bodySize: 1063,
        _transferSize: 1482,
        _error: null,
        _fetchedViaServiceWorker: false,
      },
      serverIPAddress: '[::1]',
      startedDateTime: '2025-01-03T12:45:07.755Z',
      time: 30.914000002156946,
      timings: {
        blocked: 22.050999980779366,
        dns: 0.022999999999999687,
        ssl: -1,
        connect: 0.3669999999999991,
        send: 0.38200000000000145,
        wait: 5.342999993300065,
        receive: 2.748000028077513,
        _blocked_queueing: 6.261999980779365,
        _workerStart: -1,
        _workerReady: -1,
        _workerFetchStart: -1,
        _workerRespondWithSettled: -1,
      },
    },
  },
];

export default logs;
