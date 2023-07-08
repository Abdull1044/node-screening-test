const express = require("express");

const { hotelConroller } = require("../controllers");

const router = express.Router();

router.route("/").post(hotelConroller.createHotel).get(hotelConroller.getAll);

router.route("/:id").put(hotelConroller.updateHotel);

module.exports = router;

// router
//     .route('/')
//     .post(auth(), validate(userValidation.createUser), userController.createUser)
//     .get(auth(), validate(userValidation.getUsers), userController.getUsers);
