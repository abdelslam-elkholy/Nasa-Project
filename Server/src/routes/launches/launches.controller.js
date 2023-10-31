const { getAllLaunches, createLaunch } = require("../../models/launches.model");

const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};

const httpCreateLaunche = (req, res) => {
  console.log(req.body);
  const launch = req.body;
  if (
    !launch.launchDate ||
    !launch.rocket ||
    !launch.mission ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Invalid launch INPUTS",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "Invalid launch Date" });
  }

  createLaunch(launch);
  return res.status(201).json(launch);
};

module.exports = { httpGetAllLaunches, httpCreateLaunche };
