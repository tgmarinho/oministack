const File = require("../models/File");
const Box = require("../models/Box");

class FileControler {
  async store(req, res) {
    const box = await Box.findById(req.params.id);

    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    box.files.push(file);

    await box.save();

    // notificando usuários da box id que o arqiuvo foi criado
    req.io.sockets.in(box._id).emit("file", file);

    return res.json(file);
    // criar um arquivo
  }
}

module.exports = new FileControler();
