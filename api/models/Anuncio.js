const mongoose = require('mongoose')
// definicion del Schema
const anuncioSchema = new mongoose.Schema({
  tipo: String,
  nombre: String,
  descripcion: String,
  imagenes: [{ type: String }],
  calle: String,
  ciudad: String,
  busqueda: String,
  precio: Number,
  m2: Number,
  planta: Number,
  habitaciones: Number,
  baños: Number,
  caracteristicas: {
    tipoInmueble: String,
    aguaCaliente: String,
    estado: String,
    ascensor: Boolean,
    consumoEnergetico: String,
    emisiones: String,
    parking: String,
    antigüedad: String,
    amueblado: Boolean,
    calefaccion: String,
    orientacion: String
  },
  extra: [{ type: String }],
  inmobiliaria: String,
  imagenInmobiliaria: String,
  telefono: Number,
  email: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

anuncioSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// definicion del modelo
const Anuncio = mongoose.model('Vivienda', anuncioSchema)

module.exports = Anuncio
