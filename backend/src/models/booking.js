const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customers",
      required: true,
    },
    passengerDetails: [
      {
        name: { type: String, required: true },
        gender: { type: String, required: true },
        age: { type: Number, required: true },
      },
    ],

    fare: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    busId: {
      type: Schema.Types.ObjectId,
      ref: "Buses",
      required: true,
    },
    seats: {
      type: [Number],
      required: true,
    },
    departureDetails: {
      city: { type: String, required: true },
      location: { type: String, required: true },
      date: { type: String, required: true },
    },
    arrivalDetails: {
      city: { type: String, required: true },
      location: { type: String, required: true },
      date: { type: String, required: true },
    },
    isBusinessTravel: {
      type: Boolean,
      required: false,
    },
    businessDetails: {
      gst: { type: String, required: false },
      name: { type: String, required: false },
      address: { type: String, required: false },
      email: { type: String, required: false },
    },
    isInsurance: {
      type: Boolean,
      required: false,
    },
    isCovidDonated: {
      type: Boolean,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Bookings", bookingSchema);
