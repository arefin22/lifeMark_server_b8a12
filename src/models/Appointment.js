const { Schema, default: mongoose } = require('mongoose')


const AppointmentSchema = new Schema({
    uid: {
        type:String,
        required :true
    },
    postid : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required: true
    },
    date : {
        type:String,
        required: true
    },
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment;