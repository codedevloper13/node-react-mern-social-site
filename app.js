const express = require('express');
const app = express();

// Get Request

app.get('/', (req, res) => {
  res.send('hello from simple server  \u{1F60D}');
});


const port = 8080;
app.listen(port, () => {
  console.log(`Node js Running on port ${port}`);
});
