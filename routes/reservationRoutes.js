const router = require('express').Router()
const reservationControllers = require('../controller/reservationControllers')

router.post('/create', reservationControllers.createReservation)

module.exports = router