const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const searchController = require('../app/controllers/SearchController')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res) => {
    const data = req.body;
    res.json(data);
})
router.get('/', searchController.search);

module.exports = router;