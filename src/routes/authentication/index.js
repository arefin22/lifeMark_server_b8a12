var express = require('express');
const { createCookieToken, logout } = require('../../api/authentication');
var router = express.Router()


router.post('/jwt', createCookieToken)

router.post('/logout', logout)


module.exports = router;