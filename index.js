var app = require('express');
var router = app.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/HTML/index.html");
});

router.get('/about', function(req, res) {
    res.sendFile(__dirname + "/HTML/about.html");
});

router.get('/jaysin', function(req, res) {
    res.sendFile(__dirname + "/HTML/jaysin.html");
});

router.get('/john', function(req, res) {
    res.sendFile(__dirname + "/HTML/john.html");
});

router.get('/rodrick', function(req, res) {
    res.sendFile(__dirname + "/HTML/rodrick.html");
});

router.get('/oley', function(req, res) {
    res.sendFile(__dirname + "/HTML/oley.html");
});
module.exports = router;
