require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()

const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const usersRouter = require('./controllers/users')
const anunciosRouter = require('./controllers/anuncios')

app.use(cors())
app.use(express.json())
// Ruta de inicio
app.get('/', (req, res) => {
  res.json([
    {
      message: 'Bienvenido a la API de mispisos',
      endpoint: '/api/anuncios',
      description: 'Listado de anuncios de viviendas'
    },
    {
      endpoint: '/api/anuncios/filtros',
      description:
        'Listado de anuncios de viviendas filtrados por tipoInmueble, precio y habitaciones'
    },
    {
      endpoint: '/api/anuncios/:id',
      description: 'Listado de anuncios de viviendas filtrados por id'
    },
    {
      endpoint: '/api/anuncios/:busqueda',
      description: 'Listado de anuncios de viviendas filtrados por ciudad'
    }
  ])
})

app.use('/api/anuncios', anunciosRouter)
app.use('/api/users', usersRouter)

// Middleware para manejar rutas no existentes
app.use(notFound)
// Middleware para manejar errores
app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server on port ${PORT}`)
