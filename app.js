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
  res.render('bio', {
    joe: `<title> Jaysin's Page </title>`,
    teammember: 'Jaysin',
    biotext: `<p>Hi my name is Jaysin H, and this is my about page.</p>
          <p>Im not a huge fan of OneDrive as it can be pretty stupid at at times. </p>
          <p>Im not to social around people I dont know but around friends I can be talkative.</p>
          <p>I dont really have any career goals for myself at the moment, but if I had to chose I would say something along the lines with game design.</p>
          <p>The concept for this game is pretty weird, as it's more on little nods about me. A lot of easter egg ideas. </p>`
  });
});

app.get('/oley', function (req, res) {
  res.render('bio', {
    teammember: 'Oley Birkeland',
    biotext:`<p>My specialties include web design and JavaScript.</p>
    <p>I hope to start a career as a programmer in the future, possibly as a web or game developer. ඞ</p>`,
    joe:`Oley's Page`
  });
});

app.get('/john', function (req, res) {
  res.render('bio', {
    joe:`John's Sussy Emporium`,
    teammember:`John's Page`,
    biotext:`<p>I hate OneDrive.</p>
    <p>I play agressive rampart.</p>
    <p>I want to program 10 ft tall robots to stalk around my house with murderous intent.</p>`
  });
});

app.get('/christian', function (req, res) {
  res.render('bio', {
    joe:`Christian's Dungeon`,
    teammember:`About Christian Boldt`,
    biotext:`<p>I tend to like being around people and have conversations about random stuff.</p>
    <p>I play Plague on DBD.</p>
    <p>I enjoy to rollerskate and listen to music.</p>`
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Congrats! Server is running on ${PORT}`);
});
