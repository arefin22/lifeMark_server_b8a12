var express = require('express');
const User = require('../../models/User');
const { findAll, postOneUser } = require('../../api/users');
var router = express.Router()

router.get('/user', findAll)
// router.post('/user', postOneUser)



module.exports = router