const express = require('express');
const router = express.Router();
app.engine('pug', require('pug').__express)

const basic = require('./controllers/BasicController.js');

router.get('/', basic.home);
router.get('/Rodrick', basic.Rodrick);
router.get('/john', basic.john)
router.get('/jaysin', basic.jaysin)
router.get('/oley', basic.oley)

module.exports = router;
