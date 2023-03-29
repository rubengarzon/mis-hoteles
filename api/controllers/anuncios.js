const Anuncio = require('../models/Anuncio')

exports.getAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find({})
  res.json(anuncios)
}

exports.getAnunciosFiltros = async (req, res, next) => {
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

  Anuncio.find(query)
    .then((anuncios) => {
      res.json(anuncios)
    })
    .catch((error) => {
      next(error)
    })
}

exports.getAnunciosCiudad = async (req, res) => {
  const busqueda = req.params.busqueda
  const anuncios = await Anuncio.find({ busqueda })
  if (anuncios) {
    res.json(anuncios)
  } else {
    res.status(404).end()
  }
}

/* const anunciosRouter = require('express').Router()
const Anuncio = require('../models/Anuncio')

// Obtener todos los anuncios
anunciosRouter.get('/', async (req, res) => {
  const viviendas = await Anuncio.find({})
  res.json(viviendas)
})

// obtener anuncios por filtros
anunciosRouter.get('/filtros', async (req, res, next) => {
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

  Anuncio.find(query)
    .then((viviendas) => {
      res.json(viviendas)
    })
    .catch((error) => {
      next(error)
    })
})

// Obtener anuncios por ciudad
anunciosRouter.get('/:busqueda', async (req, res, next) => {
  const busqueda = req.params.busqueda
  const viviendas = await Anuncio.find({ busqueda })
  if (viviendas) {
    res.json(viviendas)
  } else {
    res.status(404).end()
  }
})

// Actualizar un anuncio
anunciosRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id
  const vivienda = req.body
  Anuncio.findByIdAndUpdate(id, vivienda, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error)
    })
})

// Borrar un anuncio
anunciosRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id
  Anuncio.findByIdAndRemove(id)
    .then((result) => {
      res.status(204).end()
    })
    .catch((error) => {
      next(error)
    })
})

// Guardar un anuncio
anunciosRouter.post('/', async (req, res, next) => {
  const anuncio = new Anuncio(req.body)
  anuncio
    .save()
    .then((savedAnuncio) => {
      res.json(savedAnuncio)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = anunciosRouter
 */
