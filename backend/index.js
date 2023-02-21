const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const port = 7890;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});