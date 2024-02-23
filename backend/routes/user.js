
const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
// get /user/signup
//router.get('/signup' , userController.signupPage)
router.post('/createUser',userController.createUser)

router.get('/login' , userController.login)

module.exports=router;