const { getAllLaunches, createLaunch } = require("../../models/launches.model");

const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};

const httpCreateLaunche = (req, res) => {
  const launch = req.body;
  if (
    !launch.launchDate ||
    !launch.rocket ||
    !launch.misions ||
    !launch.destination
  ) {
    res.status(404).json({
      error: "Invalid launch INPUTS",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    res.status(404).json({ error: "Invalid launch Date" });
  }

  createLaunch(launch);
  return res.status(201).json(launch);
};

module.exports = { httpGetAllLaunches, httpCreateLaunche };
