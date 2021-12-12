const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/SearchController')
const app = express();

router.use(express.urlencoded());
router.use(express.json());

router.post('/', (req, res) => {
    const data = req.body;
    res.json(data);
})
router.get('/', searchController.search);

module.exports = router;