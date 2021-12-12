const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController')
router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());

router.get('/', courseController.show);

// router.get('/', menuController.findFood);
module.exports = router;