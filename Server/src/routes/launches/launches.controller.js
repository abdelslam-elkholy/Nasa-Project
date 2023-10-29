const { getAllLaunches, createLaunch } = require("../../models/launches.model");

const httpGetAllLaunches = (req, res) => {
  res.status(200).json(getAllLaunches());
};

const httpCreateLauncher = (req, res) => {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  createLaunch(launch);
};

module.exports = { httpGetAllLaunches, httpCreateLauncher };
