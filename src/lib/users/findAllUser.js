const User = require("../../models/User")

const findAllUser = async() =>{
    const result = await User.find()
    return result
}
module.exports = findAllUser