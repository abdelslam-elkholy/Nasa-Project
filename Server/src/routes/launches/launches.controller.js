const { getAllLaunches } = require("../../models/launches.model");

const httpGetAllLaunches = (req, res) => {
  res.status(200).json(getAllLaunches());
};

module.exports = { httpGetAllLaunches };
