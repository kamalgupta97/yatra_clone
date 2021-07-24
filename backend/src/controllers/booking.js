const Booking = require("../models/booking");
const express = require("express");
const router = express.Router();
const addBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.send(booking);
};
const getBooking = async (req, res) => {
  let { id } = req.params;
  const bookings = await Booking.find().lean().exec();
  let filteredBookings = bookings.filter(
    (booking) => booking.customerId.toString() == id
  );
  res.send(filteredBookings);
};
router.post("/", addBooking);
router.get("/:id", getBooking);
module.exports = router;
