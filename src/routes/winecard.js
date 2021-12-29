const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const winecardController = require('../app/controllers/WinecardControlller')

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.get('/create', winecardController.create);
router.post('/store', winecardController.store);
router.put('/:id', winecardController.update);
router.delete('/:id', winecardController.destroy);
router.patch('/:id/restore', winecardController.restore);
router.delete('/:id/force', winecardController.forceDestroy);
router.get('/:id/edit', winecardController.edit);
router.get('/trash', winecardController.trashWinecard);
router.get('/stored', winecardController.storedWinecard);

module.exports = router;