//Sets up express, EJS, the port, and encoded url
var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var app = express()
const PORT = 42069
const fs = require('fs');
app.use(express.urlencoded({ extended: true}));

var rawdata = fs.readFileSync('profiles.json');
var profileData = JSON.parse(rawdata);

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(expressLayouts)
app.set('layout', './layout/style')
app.set('view engine', 'ejs')
//Makes the root directory the home page
app.get('/', function (req, res) {
  res.render('home');
});
//Sets an about page with the /about directory
app.get('/about', function (req, res) {
  res.render('about');
});
//Jaysin's bio page
app.get('/jaysin', function (req, res) {
  res.render('bio', profileData.jaysin);
});
//Oley's bio page
app.get('/oley', function (req, res) {
  res.render('bio', profileData.oley);
});
//John's bio page
app.get('/john', function (req, res) {
  res.render('bio',  profileData.john);
});
//Christian's bio page
app.get('/christian', function (req, res) {
  res.render('bio',  profileData.christian);
});
//Sets a feedback directory
app.get('/feedback', (req, res) => {
  //If the user gives a name and adjective for feedback, mark it down in comment.
  if (req.query.name && req.query.adjective) {
    let comment = {
      name: req.query.name,
      adjective: req.query.adjective
    };

    let data = JSON.parse(fs.readFileSync('comments.json'));
    data.comments.push(comment);
    data = JSON.stringify(data);
    fs.writeFile('comments.json', data, 'utf8', () => console.log("Wrote to file"));
  } else if (!req.query.name && !req.query.adjective) {
    console.log("You're missing both parameters. You need \"name\" and \"adjective.\"");
  } else if (!req.query.name) {
    console.log("You're missing the \"name\" parameter.");
  } else {
    console.log("You're missing the \"adjective\" parameter.");
  }
});

app.post('/feedback', function(req, res) {
  if (req.body.name && req.body.adjective) {
    let comment = {
      name: req.query.name
      adjective: req.query.adjective
    }
  }
})

//When the server is running, writes a message on the command prompt.
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Congrats! Server is running on ${PORT}`);
});
