const mongoose = require('mongoose')
const appointmentModel = new mongoose.Schema(
    {
        patientName : {
            type : String,
           required : true
        },
        appointmentDate : {
            type : Date,
            required : true
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
          },
        isActive: {
            type: String,
            required: true,
            default: true
        },
        
    })

appointmentModel .set('timestamps', true)
module.exports = mongoose.model('appointment',  appointmentModel )