const findAllUser = require("../../../lib/users/findAllUser");

const findAll = async (req, res, next) => {
    try {
        const allUser = await findAllUser()
        res.send(allUser);
    }
    catch(err){
        next(err)
    }
}

module.exports = findAll