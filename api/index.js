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
// obtener viviendas por filtros
app.get('/api/viviendas/filtros', (req, res, next) => {
  const tipoInmueble = req.query.tipo
  const precio = req.query.precio
  const habitaciones = req.query.habitaciones

  const query = {}

  if (tipoInmueble) {
    query['caracteristicas.tipoInmueble'] = tipoInmueble
  }
  if (precio) {
    query.precio = { $lte: precio }
  }
  if (habitaciones) {
    query.habitaciones = habitaciones
  }

  Vivienda.find(query)
    .then((viviendas) => {
      res.json(viviendas)
    })
    .catch((error) => {
      next(error)
    })
})
// Obtener viviendas por tipoInmueble
app.get('/api/viviendas/tipoInmueble/:tipoInmueble', (req, res, next) => {
  const tipoInmueble = req.params.tipoInmueble
  Vivienda.find({ 'caracteristicas.tipoInmueble': tipoInmueble })
    .then((viviendas) => {
      if (viviendas) {
        res.json(viviendas)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => {
      next(error)
    })
})
// Obtener viviendas por precio
app.get('/api/viviendas/precio/:precio', (req, res, next) => {
  const precio = req.params.precio
  if (precio < 200000) {
    Vivienda.find({ precio: { $lte: precio } })
      .then((viviendas) => {
        if (viviendas) {
          res.json(viviendas)
        } else {
          res.status(404).end()
        }
      })
      .catch((error) => {
        next(error)
      })
  } else {
    Vivienda.find({ precio: { $gte: precio } })
      .then((viviendas) => {
        if (viviendas) {
          res.json(viviendas)
        } else {
          res.status(404).end()
        }
      })
      .catch((error) => {
        next(error)
      })
  }
})
// Obtener viviendas por habitaciones
app.get('/api/viviendas/habitaciones/:habitaciones', (req, res, next) => {
  const habitaciones = req.params.habitaciones
  Vivienda.find({ 'caracteristicas.habitaciones': habitaciones })
    .then((viviendas) => {
      if (viviendas) {
        res.json(viviendas)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => {
      next(error)
    })
})
// Obtener una vivienda por una ciudad
app.get('/api/viviendas/:busqueda', (req, res, next) => {
  const busqueda = req.params.busqueda
  Vivienda.find({ busqueda })
    .then((viviendas) => {
      if (viviendas) {
        res.json(viviendas)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => {
      next(error)
    })
})
// Actualizar una vivienda
app.put('/api/viviendas/:id', (req, res, next) => {
  const id = req.params.id
  const vivienda = req.body
  Vivienda.findByIdAndUpdate(id, vivienda, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error)
    })
})

// Borrar una vivienda
app.delete('/api/viviendas/:id', (req, res, next) => {
  const id = req.params.id
  Vivienda.findByIdAndDelete(id)
    .then(() => {
      res.status(204).end()
    })
    .catch((error) => {
      next(error)
    })
})
// Guardar una vivienda
app.post('/api/viviendas', (req, res, next) => {
  const vivienda = new Vivienda(req.body)
  vivienda
    .save()
    .then((savedVivienda) => {
      res.json(savedVivienda)
    })
    .catch((error) => {
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
