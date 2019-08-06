const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express(); // declaro uma variável para receber uma instancia de express.

app.use(cors());

// ouvir requisicao http e websockets
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://root:root@cluster0-xtxrx.mongodb.net/omnistack?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // para permitir envio de arquivos
// quando acessar a rotas files vai buscar os documentos fisicos que estao dentro da pasta temp
app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));
app.use(require("./routes")); // usando as rotas cadastradas no routes.js

server.listen(process.env.PORT || 3333); // defino um porta para o servidor executar e acessar requisições
