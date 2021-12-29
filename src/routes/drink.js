const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const drinkController = require('../app/controllers/DrinkControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', drinkController.create);
router.post('/store', drinkController.store);
router.put('/:id', drinkController.update);
router.delete('/:id', drinkController.destroy);
router.patch('/:id/restore', drinkController.restore);
router.delete('/:id/force', drinkController.forceDestroy);
router.get('/:id/edit', drinkController.edit);
router.get('/trash', drinkController.trashDrink);
router.get('/stored', drinkController.storedDrink);

module.exports = router;