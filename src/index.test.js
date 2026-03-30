import { describe, it, expect } from 'vitest';
import app from './index.js';
import http from 'node:http';

function request(server, path) {
  return new Promise((resolve, reject) => {
    const addr = server.address();
    http
      .get(`http://127.0.0.1:${addr.port}${path}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
      })
      .on('error', reject);
  });
}

describe('GET /health', () => {
  let server;

  it('returns status ok', async () => {
    server = app.listen(0); // random port
    try {
      const { status, body } = await request(server, '/health');
      expect(status).toBe(200);
      expect(body.status).toBe('ok');
      expect(body.service).toBe('nodejs-catalog-demo');
    } finally {
      server.close();
    }
  });
});
