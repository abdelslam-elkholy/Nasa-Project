const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const { loadPlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 5000;
const MONGO_URL =
  "mongodb+srv://abdelslamel5oly:nwWU5GVf0IGdUjXQ@cluster0.cyupft2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () =>
  console.log("Database connection Ready!")
);
mongoose.connection.on("error", (err) => console.log("Error: " + err));

const server = http.createServer(app);
const startServer = async () => {
  await mongoose.connect(MONGO_URL);

  await loadPlanets();
  server.listen(PORT, () => console.log(`app Is working on port ${PORT}`));
};

startServer();
