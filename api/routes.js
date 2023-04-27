const express = require('express')
const router = express.Router()
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')
const anunciosController = require('./controllers/anuncios')
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.body.userId
    const userUploadsPath = `uploads/${userId}`
    // Comprobar si existe la carpeta uploads
    if (!fs.existsSync(userUploadsPath)) {
      fs.mkdirSync(userUploadsPath)
    }

    // Comprobar si existe la carpeta uploads/userId
    if (!fs.existsSync(userUploadsPath)) {
      fs.mkdirSync(userUploadsPath)
    }

    cb(null, userUploadsPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

router.post('/api/login', loginController.login)
router.post('/api/register', registerController.register)
router.get('/api/anuncios', anunciosController.getAnuncios)
router.get('/api/anuncios/:busqueda', anunciosController.getAnunciosCiudad)
router.post('/api/anuncios/upload', upload.array('imagenes'), anunciosController.adUpload)
router.get('/api/anuncios/user/:userId', anunciosController.getAnunciosUser)
router.get('/api/filtros', anunciosController.getAnunciosFiltros)
router.put('/api/anuncios/update/:id', anunciosController.putAnuncio)
router.get('/api/anuncio/:id', anunciosController.getAnuncio)
router.delete('/api/anuncios/delete/:id', anunciosController.deleteAnuncio)

module.exports = router
