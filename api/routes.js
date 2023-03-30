const express = require('express')
const router = express.Router()
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')
const anunciosController = require('./controllers/anuncios')

router.post('/api/login', loginController.login)
router.post('/api/register', registerController.register)
router.get('/api/anuncios', anunciosController.getAnuncios)
router.get('/api/:busqueda', anunciosController.getAnunciosCiudad)

module.exports = router
