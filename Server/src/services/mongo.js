const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const mongoConnect = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB Connected!"))
    .catch((error) => console.log("There was an error: ", error));
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = { mongoConnect, mongoDisconnect };
