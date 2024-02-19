
const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
router.get('/signup' , userController.signupPage)
router.post('/createUser',userController.createUser)

module.exports=router;