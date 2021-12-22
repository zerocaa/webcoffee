const express = require('express');
const router = express.Router();
const ContactController = require('../app/controllers/ContactController')
const methodOverride = require('method-override');

router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

// router.get('/order', ContactController.order);
router.delete('/:id', ContactController.destroy);
router.patch('/:id/restore', ContactController.restore);
router.delete('/:id/force', ContactController.forceDestroy);
router.post('/feedback', ContactController.feedback)    
router.get('/', ContactController.index);


module.exports = router;