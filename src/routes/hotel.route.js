const express = require("express");

const { hotelConroller } = require("../controllers");

const router = express.Router();

router.route("/").post(hotelConroller.createHotel).get(hotelConroller.getAll);

router
  .route("/:id")
  .put(hotelConroller.updateHotel)
  .delete(hotelConroller.deleteHotel)
  .get(hotelConroller.findHotelBySlugOrId);

module.exports = router;
