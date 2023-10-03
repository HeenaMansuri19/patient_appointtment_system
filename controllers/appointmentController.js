const mongoose = require('mongoose');
const Appointment = require("../models/appointmentModel");
const Doctor =require("../models/doctorModel")



const appointmentCreated = async (req, res) => {
  const { id } = req.params;
  const { patientName, appointmentDate } = req.body;
 try {
    // Check if the doctor exists (Assuming you have a Doctor model)
    const doctorExists = await Doctor.findById(id);
    if (!doctorExists) {
      return res.status(404).json({
        success: false,
        error: 'Doctor not found',
      });
    }

    // Check if the appointment slot is already booked
    const existingAppointment = await Appointment.findOne({
      doctorId: id,
      appointmentDate: appointmentDate,
    });

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        error: 'Appointment slot is already booked',
      });
    }

    // Create the appointment
    const newAppointment = new Appointment({
      doctorId: id,
      patientName: patientName,
      appointmentDate: appointmentDate,
    });

    await newAppointment.save();

    return res.status(200).json({
      success: true,
      message: 'Appointment added successfully',
      data: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  appointmentCreated,
};