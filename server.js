const express = require("express");
const app = express();
const port = 42069;

app.use('/', require('./index.js'));
app.use('/about', require('./index.js'));
app.use('/john', require('./index.js'));
app.use('/jaysin', require('./index.js'));
app.use('/oley', require('./index.js'));
app.use('/rodrick', require('./index.js'));
app.use("/static", express.static('./static/'));

app.listen(port,() => {
  console.log('Success! Your server is now running');
});
