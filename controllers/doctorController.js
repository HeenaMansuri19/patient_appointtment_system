
const Doctor =require("../models/doctorModel");

const doctorSignUp = async (req, res) => {
  const { doctorName, specialization, location, time } = req.body;
  try {
    const existingDoctor = await Doctor.findOne({ doctorName: doctorName });
    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        message: 'Doctor already registered',
      });
    }
    const newDoctor = new Doctor({
      doctorName,
      specialization,
      location,
      time,
    });
    await newDoctor.save();
    return res.status(200).json({
      success: true,
      message: 'Doctor added successfully',
      data: newDoctor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get doctor details//
const getDoctorDetails = async (req, res) => {
  const { specialization, location } = req.query;
  try {
    let query = {};
    if (specialization) {
      query.specialization = specialization;
    }
    if (location) {
      query.location = location;
    }
    const doctors = await Doctor.find(query);
    if (doctors.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Show doctor list',
        data: doctors,
      });
    }
    return res.status(404).json({
      success: false,
      message: 'Doctor not found',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (doctor) {
      return res.status(200).json({
        success: true,
        message: 'Doctor found',
        data: doctor,
      });
    }
    return res.status(404).json({
      success: false,
      message: 'Doctor not found',
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  doctorSignUp,
  getDoctorDetails,
  getDoctorById,
};