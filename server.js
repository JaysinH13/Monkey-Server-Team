const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 42069;


app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require('./routes'));
// Set up home route
app.get('/', (req, res) => {
  res.send('This is the homepage');
});
// Set up second page
app.get('/second', (req, res) => {
  res.send('Joe Biden')
});

app.get('/joe', (req,res) => {
  res.send('Joe')
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
