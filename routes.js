const express = require('express');
const router = express.Router();


const basic = require('./controllers/BasicController.js');

router.get('/', basic.home);
router.get('/Rodrick', basic.Rodrick);
router.get('/john', basic.john)
router.get('/jaysin', basic.jaysin)
router.get('/oley', basic.oley)

module.exports = router;
