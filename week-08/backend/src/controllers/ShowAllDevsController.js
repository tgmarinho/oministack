const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const allDevs = await Dev.find();

    res.json(allDevs);
  },

  async destroy(req, res) {
    await Dev.deleteMany({}, error => {
      if (error) {
        return res.status(500).json({ message: "something got wrong..." });
      }
    });

    res.status(200).json({ message: "database is clear" });
  }
};
