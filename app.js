var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var app = express()
const PORT = 42069

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(expressLayouts)
app.set('layout', './layout/style')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/jaysin', function (req, res) {
  res.render('Jaysin');
});

app.get('/oley', function (req, res) {
  res.render('Oley');
});

app.get('/john', function (req, res) {
  res.render('John');
});

app.get('/christian', function (req, res) {
  res.render('Christian');
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Congrats! Server is running on ${PORT}`);
});
