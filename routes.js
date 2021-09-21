const express = require('express');
const router = express.Router();

const basic = require('./controllers/BasicController.js');

router.get('/', basic.home);
router.get('/second', basic.second);
router.get('/Rodrick', basic.Rodrick);

module.exports = router;
