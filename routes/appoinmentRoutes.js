const router = require('express').Router()
const appoinmentControllers = require('../controller/appoinmentControllers')

router.post('/create', appoinmentControllers.createAppoinment)

module.exports = router