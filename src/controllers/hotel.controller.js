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
  const response = await hotelServices.createHotel(req.body);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

const updateHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.updateHotel(req.params.id, req.body);
  console.log({ response });
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

const deleteHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.deleteHotel(req.params.id);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {
    data: response,
  }).send(res);
});

module.exports = {
  getAll,
  createHotel,
  updateHotel,
  deleteHotel,
};
