export function get(req) {
  // Get the raw query string
  const url = new URL(req.url, `http://${req.headers.host}`);
  const queryString = url.search;
  const params = new URLSearchParams(queryString);
  const q = params.get('q') || '';

  return {
    body: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Direct Node.js Handler Test</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              line-height: 1.6;
            }
            pre { background: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto; }
            form { margin: 20px 0; }
            input { padding: 8px; width: 300px; }
            button { padding: 8px 16px; background: #4d5eff; color: white; border: none; }
          </style>
        </head>
        <body>
          <h1>Direct Node.js Handler Test</h1>
          <p>This page uses a direct Node.js handler, bypassing Astro entirely.</p>
          
          <form action="/blog/direct-node-test" method="get">
            <input type="text" name="q" value="${q}" placeholder="Enter search term">
            <button type="submit">Test Search</button>
          </form>
          
          <h2>Request Information</h2>
          <pre>
URL: ${req.url}
Query string: ${queryString}
q parameter: "${q}"
          </pre>
          
          <h3>All Parameters</h3>
          <ul>
            ${Array.from(params.entries()).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
          </ul>
          
          <p><a href="/blog">Back to Blog</a></p>
          
          <script>
            // Check client-side query parameters
            document.write("<h2>Client-side URL Check</h2>");
            document.write("<pre>");
            document.write("window.location.href: " + window.location.href + "\\n");
            document.write("window.location.search: " + window.location.search + "\\n");
            
            const clientParams = new URLSearchParams(window.location.search);
            document.write("q parameter from client JS: " + (clientParams.get('q') || 'not found') + "\\n");
            document.write("</pre>");
          </script>
        </body>
      </html>
    `,
    headers: {
      'Content-Type': 'text/html'
    }
  };
}