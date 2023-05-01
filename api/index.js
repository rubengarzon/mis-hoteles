require('dotenv').config()
require('./mongo')

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors())
app.use(express.json())
// Configuración para servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
console.log(path.join(__dirname, '../uploads'))

// Ruta de inicio
app.get('/', (req, res) => {
  res.json([
    {
      message: 'Bienvenido a la API de mispisos',
      endpoint: '/api/anuncios',
      description: 'Listado de anuncios de viviendas'
    },
    {
      endpoint: '/api/login',
      description: 'Login de usuario'
    },
    {
      endpoint: '/api/register',
      description: 'Registro de usuario'
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
app.use(bodyParser.json())
app.use(routes)

// Middleware para manejar rutas no existentes
app.use(notFound)
// Middleware para manejar errores
app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server on port ${PORT}`)
