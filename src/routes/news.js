const express = require('express');
const router = express.Router();

const newCotrollers = require('../app/controllers/NewsController');

router.use('/showChiTiet', newCotrollers.showChiTiet);
router.use('/', newCotrollers.index)



module.exports = router;