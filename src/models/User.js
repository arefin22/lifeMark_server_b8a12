const { Schema, default: mongoose } = require('mongoose')


const UserSchema = new Schema({
    name: {
        type:String,
    },
    email : {
        type:String,
        
    },
    avatar : {
        type:String,
        
    },
    bloodGroup:{
        type: String,
        
    },
    district:{
        type:String,
        
    },
    upazila:{
        type:String,
        
    },
    status:{
        type:String,
        
    },
    role:{
        type:String,
        
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;