const { getAllLaunches, createLaunch } = require("../../models/launches.model");

const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};

const httpCreateLaunche = (req, res) => {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  createLaunch(launch);
  return res.status(201).json(launch);
};

module.exports = { httpGetAllLaunches, httpCreateLaunche };
