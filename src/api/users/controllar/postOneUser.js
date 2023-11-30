const postAUser = require("../../../lib/users/postAUser");

const postOneUser = async (req, res, next) => {
    try {
        const newUser = await postAUser(req)
        res.send(newUser);
    }
    catch(err){
        next(err)
    }
}

module.exports = postOneUser