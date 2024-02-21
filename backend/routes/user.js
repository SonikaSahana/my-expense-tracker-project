
const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
router.get('/signup' , userController.signupPage)
router.post('/createUser',userController.createUser)
router.post('/login' , userController.login)

module.exports=router;