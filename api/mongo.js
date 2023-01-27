const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

mongoose.set('strictQuery', false)
// conexion a la base de datos
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch(() => {
    console.log('Error al conectar a la base de datos')
  })
