const router = require('express').Router()
const appointment = require('../controllers/appointmentController')

router.post('/add-appointment/:id', appointment.appointmentCreated)

module.exports = router;