const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "365d" })
}

module.exports = generateToken