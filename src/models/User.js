const { Schema, default: mongoose } = require('mongoose')


const UserSchema = new Schema({
    name: {
        type:String,
        required :true
    },
    email : {
        type:String,
        required:true
    },
    avatar : {
        type:String,
        required: true
    },
    bloodGroup:{
        type: String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    upazila:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ["active", "pending"],
        required:true
    },
    role:{
        type:String,
        enum: ["admin", "user"],
        required:true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;