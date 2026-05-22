import express from "express";
import path from "path";

import { router as apiRouter } from "./routes/api.routes.js";
import { router as productsRouter } from "./routes/products.routes.js";

import { mdebug } from "./middlewares/debug.middleware.js";
import { notFound, errorHandler } from "./middlewares/errors.middleware.js";
import { mcors } from "./middlewares/mcors.middleware.js";

const app = express();

// Configurações EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(mcors);
app.use(mdebug);

app.use(express.static("public"));

// Rotas API
app.use("/api", apiRouter);
app.use("/api", productsRouter);

// Rotas Views
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, nome: "Homem-Aranha articulado", disponivel: true },
    { id: 2, nome: "funko pop dexter", disponivel: true },
    { id: 3, nome: "Capa da akatsuki", disponivel: false },
    { id: 4, nome: "Capinha do naruto", disponivel: false },
  ];

  res.render("products", {
    listaProdutos: products,
  });
});

app.get("/products/:id", (req, res) => {
  res.render("products-details"); // o cliente obterá os dados via fetch
});

// Tratamento de erros
app.use(notFound);
app.use(errorHandler);

export default app;