const User = require("../../models/User")

const postAUser = async (req) => {
    const user = req.body
    const query = { email: user.email }
    const result = await User.post(query)
    return result
}

module.exports = postAUser