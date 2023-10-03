const mongoose = require('mongoose')
const doctorModel = new mongoose.Schema(
    {
        doctorName: {
            type: String,
           required: true
        },
        specialization:
        {
            type:String,
            required:true
        },
        location: {
            type:String,
        },
        time:{
            type:Date,
        },
        isActive: {
            type: String,
            required: true,
            default: true
        },
    })

doctorModel.set('timestamps', true)
module.exports = mongoose.model('doctor', doctorModel)