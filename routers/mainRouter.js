const router = require('express').Router()

const appointmentRouter = require('../routers/appointmentRouter')
const doctorRouter = require('../routers/doctorRouter')

router.use('/doctor', doctorRouter)
router.use('/appointment', appointmentRouter)

module.exports = router;