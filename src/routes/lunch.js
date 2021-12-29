const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const lunchController = require('../app/controllers/LunchControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', lunchController.create);
router.post('/store', lunchController.store);
router.put('/:id', lunchController.update);
router.delete('/:id', lunchController.destroy);
router.patch('/:id/restore', lunchController.restore);
router.delete('/:id/force', lunchController.forceDestroy);
router.get('/:id/edit', lunchController.edit);
router.get('/trash', lunchController.trashLunch);
router.get('/stored', lunchController.storedLunch);

module.exports = router;