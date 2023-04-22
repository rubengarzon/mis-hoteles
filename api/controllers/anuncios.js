const Anuncio = require('../models/Anuncio')
const Users = require('../models/User')
/**
 *  Obtener todos los anuncios
 * @param {*} req  req.query.tipo, req.query.precio, req.query.habitaciones
 * @param {*} res  res.json(anuncios)
 */
exports.getAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find({})
  res.json(anuncios)
}
/**
 * Obtener anuncios por filtros
 * @param {*} req  req.query.tipo, req.query.precio, req.query.habitaciones
 * @param {*} res  res.json(anuncios)
 * @param {*} next  next(error)
 */
exports.getAnunciosFiltros = async (req, res, next) => {
  const tipoInmueble = req.query.tipo
  const precio = req.query.precio
  const habitaciones = req.query.habitaciones

  console.log(habitaciones)

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
/**
 *  Obtener anuncios por ciudad
 * @param {*} req  req.params.busqueda
 * @param {*} res  res.json(anuncios)
 */
exports.getAnunciosCiudad = async (req, res) => {
  const busqueda = req.params.busqueda
  const anuncios = await Anuncio.find({ busqueda })
  if (anuncios) {
    res.json(anuncios)
  } else {
    res.status(404).end()
  }
}
/**
 *  Subir un anuncio
 * @param {*} req req.body
 * @param {*} res res.json(savedAnuncio)
 * @param {*} next next(error)
 */
exports.adUpload = async (req, res, next) => {
  const anuncio = new Anuncio(req.body)
  const userId = req.body.userId
  try {
    const savedAnuncio = await anuncio.save()
    const userVivienda = await Users.findOne({ _id: userId })

    if (!userVivienda) {
      throw new Error('No existe el usuario')
    }

    userVivienda.anuncios.push(savedAnuncio._id)
    await userVivienda.save()

    res.json(savedAnuncio)
  } catch (error) {
    next(error)
  }
}
/**
 * Obtener anuncios de un usuario
 * @param {*} req  req.params.userId
 * @param {*} res  res.json(anunciosUser)
 * @param {*} next  next(error)
 * @returns anunciosUser
 */
exports.getAnunciosUser = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await Users.findOne({ _id: userId })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    const anunciosUser = await Anuncio.find({ _id: { $in: user.anuncios } })

    res.json(anunciosUser)
  } catch (error) {
    next(error)
  }
}
/**
 *  Actualizar un anuncio
 * @param {*} req req.params.id, req.body
 * @param {*} res res.json(result)
 * @param {*} next next(error)
 */
exports.putAnuncio = async (req, res, next) => {
  const id = req.params.id
  const anuncio = req.body
  Anuncio.findByIdAndUpdate(id, anuncio, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error)
    })
}
/**
 * Eliminar un anuncio
 * @param {*} req req.params.id
 * @param {*} res res.status(204).end()
 * @param {*} next next(error)
 */
exports.deleteAnuncio = async (req, res, next) => {
  const id = req.params.id
  Anuncio.findByIdAndRemove(id)
    .then((result) => {
      res.status(204).end()
    })
    .catch((error) => {
      next(error)
    })
}
/**
 *  Obtener un anuncio
 * @param {*} req  req.params.id
 * @param {*} res  res.json(result)
 * @param {*} next  next(error)
 */
exports.getAnuncio = async (req, res, next) => {
  const id = req.params.id
  Anuncio.findById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      next(error)
    })
}
