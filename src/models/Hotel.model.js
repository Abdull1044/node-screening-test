const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  price: Number,
  date: Date,
  slug: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
