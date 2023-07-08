const catchAsync = require("../utils/catchAsync");
const ApiResponse = require("../utils/ApiResponse");
const httpStatus = require("http-status");
const { hotelServices } = require("../services");

const getAll = catchAsync(async (req, res) => {
  const response = await hotelServices.getAll();
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

const createHotel = catchAsync(async (req, res) => {
  console.log({req})
  const response = await hotelServices.createHotel(req.body);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

const updateHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.createHotel(req.body);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

module.exports = {
  createHotel,
  getAll,
  updateHotel,
};
