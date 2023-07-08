const httpStatus = require("http-status");
const { Hotel } = require("../models");
const ApiError = require("../utils/ApiError");

const getAll = async () => {
  return await Hotel.find({});
};

const createHotel = async (newHotel) => {
  const hotel = await Hotel.create(newHotel);
  return hotel;
};

const updateHotel = async (_id, updatedHotel) => {
  const hotel = await Hotel.findByIdAndUpdate(_id, updatedHotel, {
    new: true,
  });
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel not found");
  }
  return await hotel.save();
};

const deleteHotel = async (_id) => {
  const hotel = await Hotel.findById(_id);
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel not found");
  }
  return await hotel.deleteOne();
};

const findHotelBySlugOrId = async (slugOrId) => {
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(slugOrId);
  let query;

  if (isObjectId) {
    query = { _id: slugOrId };
  } else {
    query = { slug: slugOrId };
  }

  const hotel = await Hotel.findOne(query);
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel not found");
  }
  return hotel;
};

module.exports = {
  getAll,
  updateHotel,
  createHotel,
  deleteHotel,
  findHotelBySlugOrId,
};
