const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    default: "New York",
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  slug: {
    type: String,
    default: "ABC",
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
