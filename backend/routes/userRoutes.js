const express = require('express')
const {registerUser, authUser} = require('../controllers/userControllers')

const router = express.Router()

//for signup
// router.route('/').post(registerUser)
router.post('/',registerUser)


// for login
router.post('/login', authUser)

module.exports = router

