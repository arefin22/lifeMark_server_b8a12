const { Schema, default: mongoose } = require('mongoose')

// _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots
// testName, testDate, testImgUrl, testPrice, testSlots, testDetails
const TestSchema = new Schema({
    testName: {
        type:String,
        required :false
    },
    testImgUrl : {
        type:String,
        required:false
    },
    testDate : {
        type:String,
        required: false
    },
    testDetails:{
        type: String,
        required:false
    },
    testPrice:{
        type:String,
        required:false
    },
    testSlots:{
        type:String,
        required:false
    },
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test;