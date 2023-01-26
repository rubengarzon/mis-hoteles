
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
const Vivienda = require('./models/Vivienda')
/* import mongo from "./mongo.ts"; */
/* import viviendas from "../db/viviendas.json"; */
/* import Vivienda from "./models/Vivienda.ts"; */

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de mispisos',
    endpoint: '/viviendas',
    description: 'Listado de viviendas'
  })
})

app.get('/viviendas', (req, res) => {
  Vivienda.find({}).then((viviendas) => {
    res.json(viviendas)
  })
})

const PORT = 3001
app.listen(PORT)
console.log(`Server on port ${PORT}`)

/* app.get("/viviendas/:ciudad", (c) => {
  const ciudad = c.req.param("ciudad");
  const viviendasCiudad = viviendas.filter(
    (vivienda) => vivienda.ciudad === ciudad
  );
  return viviendasCiudad
    ? c.json(viviendasCiudad)
    : c.json({ message: "No hay ninguna casa o piso en esa Ciudad" }, 404);
}); */
