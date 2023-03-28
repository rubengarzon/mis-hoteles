const express = require('express')
const router = express.Router()
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')

router.post('/api/login', loginController.login)
router.post('/api/register', registerController.register)

module.exports = router
