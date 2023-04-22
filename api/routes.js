const express = require('express')
const router = express.Router()
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')
const anunciosController = require('./controllers/anuncios')

router.post('/api/login', loginController.login)
router.post('/api/register', registerController.register)
router.get('/api/anuncios', anunciosController.getAnuncios)
router.get('/api/anuncios/:busqueda', anunciosController.getAnunciosCiudad)
router.post('/api/anuncios/upload', anunciosController.adUpload)
router.get('/api/anuncios/user/:userId', anunciosController.getAnunciosUser)
router.get('/api/filtros', anunciosController.getAnunciosFiltros)
router.put('/api/anuncios/update/:id', anunciosController.putAnuncio)
router.get('/api/anuncio/:id', anunciosController.getAnuncio)
router.delete('/api/anuncios/delete/:id', anunciosController.deleteAnuncio)

module.exports = router
