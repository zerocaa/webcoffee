const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController')
const Food = require("../app/models/Food");

router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());

router.get('/stored/listorder', meController.storedOrder);
router.get('/trash/listorder', meController.trashOrder);
module.exports = router;
