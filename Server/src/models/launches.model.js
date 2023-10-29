const launches = new Map();

const launch = {
  flightNumber: 100,
  rocket: "Explorer IS1",
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27 , 2030"),
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
