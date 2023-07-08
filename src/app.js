const express = require("express");
const morgan = require("./config/morgan");
const database = require("./config/database");
const cors = require("./config/cors");
const ApiError = require("./utils/ApiError");
const routes = require("./routes");
const httpStatus = require("http-status");

const { errorConverter, errorHandler } = require("./middlewares/error");

const app = express();

// setup logger
app.use(morgan.successHandler);
app.use(morgan.errorHandler);

// setup database
database.connect();

app.use(express.json());



// setup cors
cors(app);

// api routes
app.use(routes);


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Route not found"));
});

// convert error to ApiError
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
