from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class SPAHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        candidate = ROOT / self.path.lstrip('/')
        if self.path in ('/dashboard', '/day/12') or (not candidate.exists() and '.' not in self.path.rsplit('/', 1)[-1]):
            self.path = '/index.html'
        return super().do_GET()

ThreadingHTTPServer(('127.0.0.1', 4173), SPAHandler).serve_forever()
