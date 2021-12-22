const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController')
const Food = require("../app/models/Food");

router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());

router.get('/stored/user', adminController.account);
router.get('/createmenu', adminController.create);
router.get('/stored/contact', adminController.storedContact);
router.get('/trash/contact', adminController.trashContact);

module.exports = router;
