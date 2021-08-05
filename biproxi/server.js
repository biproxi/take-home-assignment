const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`)
});