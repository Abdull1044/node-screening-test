const express = require("express");
const validate = require("../middlewares/validate");

const { hotelConroller } = require("../controllers");
const { hotelValidaion } = require("../validations");

const router = express.Router();

router
  .route("/")
  .post(validate(hotelValidaion.createHotel), hotelConroller.createHotel)
  .get(validate(hotelValidaion.findAllQuerySchema), hotelConroller.getAll);

router
  .route("/:id")
  .put(validate(hotelValidaion.updateHotel), hotelConroller.updateHotel)
  .delete(validate(hotelValidaion.deleteHotel), hotelConroller.deleteHotel)
  .get(
    validate(hotelValidaion.slugOrIdParamSchema),
    hotelConroller.findHotelBySlugOrId
  );

module.exports = router;
