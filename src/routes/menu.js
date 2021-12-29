const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController')

// router.get('/listdishes', menuController.list);
// router.get('/stored/listorder', menuController.create);
// router.get('/trash/listorder', menuController.trashList);

router.get('/test', menuController.test)
router.get('/', menuController.index);
// router.get('/', menuController.findFood);
module.exports = router;