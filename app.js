// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('🚀 Hello from EC2 deployed via GitHub Actions!');
// });

// app.listen(PORT, () => {
//   console.log(`App listening at http://localhost:${PORT}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>🚀 EC2 Deployed via GitHub Actions</title>
        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEJ02xF5yHShU1B9r98BG72vN55V0k+5fVne/Y1nmx27lzZZk3HpOdNm0g6O3"
          crossorigin="anonymous"
        />
        <style>
          body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
            padding-top: 50px;
          }
          .hero {
            background-color: #007bff;
            color: white;
            padding: 80px 0;
            text-align: center;
          }
          .content {
            margin-top: 50px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <!-- Hero Section -->
        <div class="hero">
          <h1 class="display-3">Welcome to My Beautiful Website!</h1>
          <p class="lead">🚀 Deployed to EC2 via GitHub Actions</p>
        </div>

        <!-- Main Content -->
        <div class="container content">
          <h2>About This Project</h2>
          <p>
            This simple web app is built using <strong>Express.js</strong> and deployed on
            an EC2 instance with continuous integration via <strong>GitHub Actions</strong>.
          </p>
          <p>It's a great starting point to learn deployment and CI/CD workflows!</p>
          <a href="https://github.com" class="btn btn-primary">Visit GitHub</a>
        </div>

        <!-- Bootstrap JS & Popper.js -->
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz4fnFO9gybGzY5t7W+P2X6GJEX5vnoFJ5I/nkH3S4X5d+8g2F8sl2tdo+"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIq0v8FqDxRb7tBltQjDZ5rD4x9G8xhD9g2xkP1YZfo+q3IW/9W"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
