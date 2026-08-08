import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html' };
createServer(async (request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname;
  const requested = path === '/' || path === '/dashboard' || path === '/day/12'
    ? 'index.html' : request.url.slice(1);
  try {
    const file = await readFile(join(root, requested));
    response.writeHead(200, { 'Content-Type': types[extname(requested)] || 'application/octet-stream' });
    response.end(file);
  } catch {
    response.writeHead(404); response.end('Not found');
  }
}).listen(4175, '127.0.0.1');
