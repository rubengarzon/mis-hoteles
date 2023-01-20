import { Hono } from "hono";
import { cors } from "hono/cors";
import viviendas from "../db/viviendas.json";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.json([
    {
      endpoint: "/viviendas",
      description: "Listado de viviendas",
    },
  ]);
});

app.get("/viviendas", (c) => {
  return c.json(viviendas);
});

app.get("/viviendas/:ciudad", (c) => {
  const ciudad = c.req.param("ciudad");
  const viviendasCiudad = viviendas.filter(
    (vivienda) => vivienda.ciudad === ciudad
  );
  return viviendasCiudad
    ? c.json(viviendasCiudad)
    : c.json({ message: "No hay ninguna casa o piso en esa Ciudad" }, 404);
});

export default app;
