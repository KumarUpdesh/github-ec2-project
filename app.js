const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from EC2 deployed via GitHub Actions!');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

