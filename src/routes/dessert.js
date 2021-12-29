const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const dessertController = require('../app/controllers/DessertControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', dessertController.create);
router.post('/store', dessertController.store);
router.put('/:id', dessertController.update);
router.delete('/:id', dessertController.destroy);
router.patch('/:id/restore', dessertController.restore);
router.delete('/:id/force', dessertController.forceDestroy);
router.get('/:id/edit', dessertController.edit);
router.get('/trash', dessertController.trashDessert);
router.get('/stored', dessertController.storedDessert);

module.exports = router;