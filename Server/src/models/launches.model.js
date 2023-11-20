const launchesDataBase = require("./launches.mongo");
const planets = require("./planets.mongo");

// const launches = new Map();
// let flightNumber = 100;

const launch = {
  flightNumber: 100,
  rocket: "Explorer IS1",
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27 , 2030"),
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
  target: "Kepler-442 b",
};

const getAllLaunches = async () => {
  return await launchesDataBase.find({}, { _id: 0, __v: 0 });
};

const existLaunchWithId = async (id) => {
  return await launchesDataBase.findOne({ flightNumber: id });
};

const saveLaunch = async (launch) => {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });

  if (!planet) {
    throw new Error("no matching planet Found");
  }

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

const scheduleLaunch = async (launch) => {
  const newLaunch = {
    ...launch,
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
    flightNumber: (await getlatestFlightNumber()) + 1,
  };

  await saveLaunch(newLaunch);
};

const abortLaunchById = async (id) => {
  const aborted = await launchesDataBase.updateOne(
    {
      flightNumber: id,
    },
    {
      upcoming: false,
      success: false,
    }
  );
  return aborted.modifiedCount === 1;
};

module.exports = {
  getAllLaunches,
  scheduleLaunch,
  existLaunchWithId,
  abortLaunchById,
};
