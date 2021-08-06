const express = require('express');
const bodyParser = require('body-parser');
const { supabase } = require('./src/reducers/client.ts');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.port || 4000;


app.post('/create', (req, res) => {
  console.log('hello')
  res.status(201).send('Post created')
})

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`)
});