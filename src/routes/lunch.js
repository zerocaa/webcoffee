const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const upload = require("../util/multer");
const lunchController = require('../app/controllers/LunchControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', lunchController.create);
router.post('/store', upload.single("image"), lunchController.store);
// router.get('/:id', lunchController.getLunch);
router.put('/:id', upload.single("image"), lunchController.update);
router.delete('/:id', lunchController.destroy);
router.patch('/:id/restore', lunchController.restore);
router.delete('/:id/force', lunchController.forceDestroy);
router.get('/:id/edit', lunchController.edit);
router.get('/trash', lunchController.trashLunch);
router.get('/stored', lunchController.storedLunch);

module.exports = router;