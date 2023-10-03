const router = require('express').Router()
const doctor = require('../controllers/doctorController');

router.post('/doctor-signUp', doctor.doctorSignUp)
router.get('/get-list', doctor.getDoctorDetails)
router.get('/get-doctor/:id', doctor.getDoctorById)


module.exports = router;
