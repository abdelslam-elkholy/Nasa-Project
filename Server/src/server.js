const http = require("http");

const { mongoConnect } = require("./services/mongo");

const app = require("./app");
const { loadPlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  await loadPlanets();
  server.listen(PORT, () => console.log(`app Is working on port ${PORT}`));
};

startServer();
