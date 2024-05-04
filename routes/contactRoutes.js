const router = require('express').Router()
const contactControllers = require('../controller/contactControllers')

router.post('/create', contactControllers.createContact)

module.exports = router