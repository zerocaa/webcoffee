const express = require('express');
const router = express.Router();
const ContactController = require('../app/controllers/ContactController')
const app = express();
app.use(express.json());

// router.get('/order', ContactController.order);
router.get('/', ContactController.index);
router.post('/', ContactController.post);

module.exports = router;