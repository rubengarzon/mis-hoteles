const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
// conexion a la base de datos
mongoose
  .connect('mongodb://127.0.0.1:27017/mispisos')
  .then(() => {
    console.log('Conectado a la base de datos')
  }).catch(() => {
    console.log('Error al conectar a la base de datos')
  })
