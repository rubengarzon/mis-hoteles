import { Hono } from "hono";
import viviendas from "../db/viviendas.json";

const app = new Hono();

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

export default app;
