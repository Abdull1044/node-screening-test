const catchAsync = require("../utils/catchAsync");
const ApiResponse = require("../utils/ApiResponse");
const httpStatus = require('http-status');

const testRoute = catchAsync(async (req, res) => {
    console.log("HERE")
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: "TEST",
  }).send(res);
});

module.exports = {
  testRoute,
};
