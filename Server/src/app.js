const express = require("express");
const app = express();

const planetsRouter = require("./routes/planets/planets.route");

app.use(express.json());
app.use("/planets", planetsRouter);

module.exports = app;
