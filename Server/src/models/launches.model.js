const launches = new Map();
let flightNumber = 100;
const launch = {
  flightNumber: 100,
  rocket: "Explorer IS1",
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27 , 2030"),
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
  target: "Kepler-422 b",
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
  return Array.from(launches.values());
};

const existLaunchWithId = (id) => {
  return launch.has(id);
};

const createLaunch = (launch) => {
  flightNumber++;
  launches.set(
    flightNumber,
    Object.assign(launch, {
      flightNumber,
      customer: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
};

// const abortLaunch = (id) => {
module.exports = { getAllLaunches, existLaunchWithId ,createLaunch ,  };
