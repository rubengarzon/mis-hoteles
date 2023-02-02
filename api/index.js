
require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
const Vivienda = require('./models/Vivienda')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors())
app.use(express.json())
// Ruta de inicio
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de mispisos',
    endpoint: '/api/viviendas',
    description: 'Listado de viviendas'
  })
})
// Obtener todas las viviendas
app.get('/api/viviendas', (req, res) => {
  Vivienda.find({}).then((viviendas) => {
    res.json(viviendas)
  })
})
// Obtener una vivienda por una ciudad
app.get('/api/viviendas/:busqueda', (req, res, next) => {
  const busqueda = req.params.busqueda
  Vivienda.find({ busqueda }).then((viviendas) => {
    if (viviendas) {
      res.json(viviendas)
    } else {
      res.status(404).end()
    }
  }).catch((error) => {
    next(error)
  })
})
// Actualizar una vivienda
app.put('/api/viviendas/:id', (req, res, next) => {
  const id = req.params.id
  const vivienda = req.body
  Vivienda.findByIdAndUpdate(id, vivienda, { new: true }).then((result) => {
    res.json(result)
  }).catch((error) => {
    next(error)
  })
})

// Borrar una vivienda
app.delete('/api/viviendas/:id', (req, res, next) => {
  const id = req.params.id
  Vivienda.findByIdAndDelete(id).then(() => {
    res.status(204).end()
  }).catch((error) => {
    next(error)
  })
})
// Guardar una vivienda
app.post('/api/viviendas', (req, res, next) => {
  const vivienda = new Vivienda(req.body)
  vivienda.save().then((savedVivienda) => {
    res.json(savedVivienda)
  }).catch((error) => {
    next(error)
  })
})

// Middleware para manejar rutas no existentes
app.use(notFound)
// Middleware para manejar errores
app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server on port ${PORT}`)
