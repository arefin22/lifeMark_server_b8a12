var jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;

    if(token){
        return res.status(401).send({message : 'Unauthorized Access'})
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).send({message: 'Unauthorized Access'})
        }
        req.user = decoded
        next();
    })
}

module.exports = verifyToken