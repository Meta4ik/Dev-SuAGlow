import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        directory = os.path.dirname(os.path.abspath(__file__))
        super().__init__(*args, directory=directory, **kwargs)

if __name__ == '__main__':
    port = 8765
    server = HTTPServer(('127.0.0.1', port), CustomHandler)
    print(f"Serving Exoblanc Mobile Web App on http://127.0.0.1:{port}")
    server.serve_forever()
