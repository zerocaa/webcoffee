const express = require('express');
const router = express.Router();

const blogSController = require('../app/controllers/BlogSingleController')

router.get('/', blogSController.blogsingle);

module.exports = router;