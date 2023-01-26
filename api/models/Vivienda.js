const mongoose = require('mongoose')
// definicion del Schema
const viviendaSchema = new mongoose.Schema({
  tipo: String,
  nombre: String,
  descripcion: String,
  imagenes: [{ type: String }],
  calle: String,
  ciudad: String,
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
    emisiones: String
  },
  extra: [{ type: String }],
  inmobiliaria: String,
  imagenInmobiliaria: String,
  telefono: Number,
  email: String
})

// definicion del modelo
const Vivienda = mongoose.model('Vivienda', viviendaSchema)

/* const vivienda = new Vivienda({
  tipo: 'piso',
  nombre: 'Piso en venta en calle de la paz',
  descripcion: 'Piso en venta en calle de la paz',
  imagenes: [],
  calle: 'Calle de la paz',
  ciudad: 'Madrid',
  precio: 100000,
  m2: 100,
  planta: 1,
  habitaciones: 3,
  baños: 2,
  caracteristicas: {
    tipoInmueble: 'Piso',
    aguaCaliente: 'Individual',
    estado: 'Para reformar',
    ascensor: true,
    consumoEnergetico: 'E',
    emisiones: 'E'
  },
  extra: ['Amueblado', 'Trastero', 'Terraza'],
  inmobiliaria: 'Inmobiliaria 1',
  imagenInmobiliaria: 'https://picsum.photos/200/300',
  telefono: 123456789,
  email: 'prueba@gmail.com'
})

vivienda
  .save()
  .then((vivienda) => {
    console.log(vivienda)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(err)
  }) */

module.exports = Vivienda
