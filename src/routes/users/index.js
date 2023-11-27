var express = require('express');
const User = require('../../models/User');
const { findAll } = require('../../api/users');
var router = express.Router()

router.get('/user', findAll)



module.exports = router