const {
  getAllLaunches,
  scheduleLaunch,
  existLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

const httpGetAllLaunches = async (req, res) => {
  return res.status(200).json(await getAllLaunches());
};

const httpCreateLaunche = async (req, res) => {
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

  await scheduleLaunch(launch);
  return res.status(201).json(launch);
};

const httpAbortLaunche = async (req, res) => {
  const launchId = req.params.id * 1;

  if (!(await existLaunchWithId(launchId))) {
    return res.status(404).json({ error: "Launch not found" });
  }

  const aborted = await abortLaunchById(launchId);
  if (!aborted) {
    return res.status(404).json({ error: "Hsnt been updated" });
  }

  return res.status(200).json(aborted);
};
module.exports = { httpGetAllLaunches, httpCreateLaunche, httpAbortLaunche };
