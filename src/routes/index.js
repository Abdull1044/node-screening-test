const express = require("express");
const hotelRouter = require("./hotel.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/hotels",
    route: hotelRouter,
  },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
