const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const dinnerController = require('../app/controllers/DinnerControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', dinnerController.create);
router.post('/store', dinnerController.store);
router.put('/:id', dinnerController.update);
router.delete('/:id', dinnerController.destroy);
router.patch('/:id/restore', dinnerController.restore);
router.delete('/:id/force', dinnerController.forceDestroy);
router.get('/:id/edit', dinnerController.edit);
router.get('/trash', dinnerController.trashDinner);
router.get('/stored', dinnerController.storedDinner);

module.exports = router;