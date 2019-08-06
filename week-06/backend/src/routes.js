const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router(); // atribui o router para receber métodos do Router exemplo: get e post, e outros do REST

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

// Defino a primeira rota
routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

// exporto para module.exports
module.exports = routes;
