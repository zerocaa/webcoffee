const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const breakfastController = require('../app/controllers/BreakfastController')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', breakfastController.create);
router.post('/store', breakfastController.store);
router.put('/:id', breakfastController.update);
router.delete('/:id', breakfastController.destroy);
router.patch('/:id/restore', breakfastController.restore);
router.delete('/:id/force', breakfastController.forceDestroy);
router.get('/:id/edit', breakfastController.edit);
router.get('/trash', breakfastController.trashBreakfast);
router.get('/stored', breakfastController.storedBreakfast);

module.exports = router;