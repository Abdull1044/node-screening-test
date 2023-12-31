const catchAsync = require("../utils/catchAsync");
const ApiResponse = require("../utils/ApiResponse");
const httpStatus = require("http-status");
const { hotelServices } = require("../services");

const createHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.createHotel(req.body);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], response).send(res);
});

const updateHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.updateHotel(req.params.id, req.body);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], response).send(res);
});

const deleteHotel = catchAsync(async (req, res) => {
  const response = await hotelServices.deleteHotel(req.params.id);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], response).send(res);
});

const findHotelBySlugOrId = catchAsync(async (req, res) => {
  const response = await hotelServices.findHotelBySlugOrId(req.params.id);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], response).send(res);
});

const getAll = catchAsync(async (req, res) => {
  const response = await hotelServices.getAll(req.query);
  new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], response).send(res);
});

module.exports = {
  getAll,
  createHotel,
  updateHotel,
  deleteHotel,
  findHotelBySlugOrId,
};
