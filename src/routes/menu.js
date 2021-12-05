const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController')


router.get('/:slug', menuController.show);
router.get('/', menuController.index);
// router.get('/', menuController.findFood);
module.exports = router;