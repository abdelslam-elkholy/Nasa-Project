const express = require("express");
const launchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpCreateLaunche,
} = require("./launches.controller");

launchesRouter.use("/").get(httpGetAllLaunches).post(httpCreateLaunche);

module.exports = launchesRouter;
