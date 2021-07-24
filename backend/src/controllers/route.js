const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/booking");
const express = require("express");
const router = express.Router();

const postRoutes = async (req, res) => {
  //console.log(req.body);
  const postData = await Route.create(req.body);
  res.status(201).json({ data: postData });
};

const getAllRoutes = async (req, res) => {
  let routes = await Route.find().lean().exec();
  res.send(routes);
};

// get route,buses and available seats
const getOneRoute = async (req, res) => {
  let departure = req.query.from;
  let arrival = req.query.to;
  //let date = req.params.date;
  console.log(departure, arrival)
  // get the relevant route
  // let route = await Route.find({
  //   $and: { departureLocation: departure, arrivalLocation: arrival },
  // })
  let route = await Route.find()
    .lean()
    .exec();


  // get all buses for this route
  //let availableBuses = await Bus.find({ routes: route._id }).lean().exec();

  ///const busIdWithBookedSeats = {};

  // get the seats booked for each matched buses
  // availableBuses.forEach(async (bus) => {
  //   const bookings = await Booking.find({
  //     $and: { "departureDetails.date": date, busId: bus._id },
  //   })
  //     .lean()
  //     .exec();
  //   bookings.forEach((booking) => {
  //     currentSeats = [...currentSeats, ...booking.seats];
  //   });
  //   busIdWithBookedSeats[bus._id.toString()] = currentSeats;
  // });
  res.status(200).json({
    route: route,
    //availableBuses: availableBuses,
    //busIdWithBookedSeats,
  });
};

router.get("/", getAllRoutes);
router.get("/travel", getOneRoute);
// router.get("/travel", (req, res) => {
//   const query = req.query
//   console.log(query)
//   res.status(200).json({data: "test"})
// });
router.post("/", postRoutes)

module.exports = router;
