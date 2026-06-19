const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>AWS CI/CD Pipeline</title>
      <style>
          body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #0f172a, #1e3a8a);
              color: white;
              text-align: center;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          .container {
              background: rgba(255,255,255,0.08);
              padding: 40px;
              border-radius: 20px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.4);
              width: 70%;
              max-width: 800px;
          }

          h1 {
              font-size: 42px;
              margin-bottom: 10px;
          }

          h2 {
              color: #38bdf8;
              margin-bottom: 20px;
          }

          p {
              font-size: 20px;
              line-height: 1.6;
          }

          .badge {
              display: inline-block;
              margin: 8px;
              padding: 10px 18px;
              border-radius: 25px;
              background: #22c55e;
              font-weight: bold;
          }

          .footer {
              margin-top: 30px;
              font-size: 16px;
              color: #cbd5e1;
          }

          .pipeline {
              margin-top: 25px;
              font-size: 18px;
              color: #facc15;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>🚀 AWS CI/CD Pipeline Project</h1>
          <h2>Continuous Integration & Continuous Deployment</h2>

          <p>
              This Node.js application is automatically deployed using
              AWS CI/CD services.
          </p>

          <div>
              <span class="badge">GitHub</span>
              <span class="badge">CodePipeline</span>
              <span class="badge">CodeBuild</span>
              <span class="badge">EC2 Deploy</span>
          </div>

          <div class="pipeline">
              🔄 GitHub → ⚙️ CodeBuild → ☁️ AWS → 🚀 Auto Deployment
          </div>

          <div class="footer">
              Built with ❤️ by <b>Vaibhav Thete</b>
          </div>
      </div>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});