const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController')
const methodOverride = require('method-override');
const Food = require("../app/models/Food");

router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/test', adminController.testallaccount, adminController.allaccount);
router.get('/', adminController.allaccount);
// router.get('/trash/lunch', adminController.trashlunch);
// router.get('/stored/lunch', adminController.storedlunch);
// router.get('/trash/dinner', adminController.trashdinner);
// router.get('/stored/dinner', adminController.storeddinner);
// router.get('/trash/dessert', adminController.trashdessert);
// router.get('/stored/dessert', adminController.storeddessert);
// router.get('/trash/winecard', adminController.trashwinecard);
// router.get('/stored/winecard', adminController.storedwinecard);
// router.get('/trash/drink', adminController.trashdrink);
// router.get('/stored/drink', adminController.storeddrink);
router.get('/stored/user', adminController.account);
router.get('/stored/contact', adminController.storedContact);
router.get('/trash/contact', adminController.trashContact);

module.exports = router;
