const express = require("express");
const launchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpCreateLaunche,
} = require("./launches.controller");

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpCreateLaunche);

module.exports = launchesRouter;
