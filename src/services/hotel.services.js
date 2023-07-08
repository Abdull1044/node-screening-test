const httpStatus = require("http-status");
const { Hotel } = require("../models");

const getAll = async () => {
  return await Hotel.find({});
};

const createHotel = async (newHotel) => {
  console.log({ newHotel });
  try {
    const hotel = await Hotel.create(newHotel);
    return hotel;
  } catch (error) {
    res.status(500).json({ error: "Failed to create a hotel" });
  }
};

const updateHotel = async (id, updatedHotel) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(id, updatedHotel, { new: true });
    if(!hotel){
        return "Hotel not found'"
    }
    return hotel;
  } catch (error) {
    res.status(500).json({ error: "Failed to update the hotel" });
  }
};

module.exports = {
  updateHotel,
  createHotel,
  getAll,
};
