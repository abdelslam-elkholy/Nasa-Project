const express = require("express");
const launchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpCreateLaunche,
  httpDeleteLaunche,
} = require("./launches.controller");

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpCreateLaunche);
launchesRouter.delete("/:id", httpDeleteLaunche);

module.exports = launchesRouter;
