const express = require("express");
const launchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpCreateLaunche,
} = require("./launches.controller");

launchesRouter.route("/").get(httpGetAllLaunches).post(httpCreateLaunche);

module.exports = launchesRouter;
