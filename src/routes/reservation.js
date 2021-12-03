const express = require('express');
const router = express.Router();

const ReserController = require('../app/controllers/ReservationController')

router.get('/', ReserController.reservation);

module.exports = router;