const express = require('express');
const router = express.Router();

const listController = require('../app/controllers/listController')

router.get('/:slug', listController.show);

module.exports = router;