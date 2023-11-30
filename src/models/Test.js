const { Schema, default: mongoose } = require('mongoose')

// _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots
// testName, testDate, testImgUrl, testPrice, testSlots, testDetails
const TestSchema = new Schema({
    testName:String,
    testImgUrl:String,
    testDate :String,
    testDetails: String,
    testPrice:String,
    testSlots:String,
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test;