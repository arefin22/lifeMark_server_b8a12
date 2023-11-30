const { Schema, default: mongoose } = require('mongoose')


const AppointmentSchema = new Schema({
    postid : {
        type:String,
        
    },
    email : {
        type:String,

    },
    date : {
        type:String,

    },
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment;