const launchesDataBase = require("./launches.mongo");

const launches = new Map();
let flightNumber = 100;
const launch = {
  flightNumber: 100,
  rocket: "Explorer IS1",
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27 , 2030"),
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
  target: "Kepler-422 b",
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = async () => {
  await launchesDataBase.find({}, { _id: 0, __v: 0 });
};

const existLaunchWithId = (id) => {
  return launches.has(id);
};

const saveLaunch = async (launch) => {
  await launchesDataBase.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  );
};

saveLaunch(launch);

const getlatestFlightNumber = async () => {
  const latestLaunch = await launchesDataBase.findOne().sort("-flightNumber");
  return latestLaunch.flightNumber || 100;
};

const createLaunch = (launch) => {
  flightNumber++;
  launches.set(
    flightNumber,
    Object.assign(launch, {
      flightNumber,
      customers: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
};

const abortLaunchById = (id) => {
  const aborted = launches.get(id);

  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
};

module.exports = {
  getAllLaunches,
  createLaunch,
  existLaunchWithId,
  abortLaunchById,
};
