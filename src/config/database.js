const mongoose = require("mongoose");
const util = require("util");
require("dotenv").config();

const logger = require("./logger");

const connect = async () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      (connection) => {
        logger.info("Database connected");
      },
      (error) => {
        logger.error(error);
        throw new Error(`Database connection error: ${error.message}`);
      }
    );
  mongoose.set("debug", (collectionName, methodName, ...methodArgs) => {
    const msgMapper = (msg) => {
      return util
        .inspect(msg, false, 10, true)
        .replace(/\n/g, "")
        .replace(/\s{2,}/g, " ");
    };
    logger.debug(
      `Mongoose: ${collectionName}.${methodName}` +
        `(${methodArgs.map(msgMapper).join(", ")})`
    );
  });
};

module.exports = { connect };
