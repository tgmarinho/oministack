const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

/** conectando o socket io no server do express */
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
io.origins("*:*");

const connectedUsers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;
  console.log(user, socket.id);
  connectedUsers[user] = socket.id;
});

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-7e7e7.mongodb.net/omnistack8?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
