const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://abdelslamel5oly:nwWU5GVf0IGdUjXQ@cluster0.cyupft2.mongodb.net/Nasa?retryWrites=true&w=majority";

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
