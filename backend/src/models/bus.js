const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const busSchema = new Schema({
  operatorName: {
    type: String,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number],
    required: true,
  },
  totalSeats: {
    type: Number,
    required: false,
  },
  routes: {
    type: Schema.Types.ObjectId,
    ref: "Routes",
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  liveTracking: {
    type: Number,
    required: true,
  },
  busServices: {
    type: Schema.Types.ObjectId,
    ref: "BusServices",
    required: true,
  },
});

module.exports = mongoose.model("Buses", busSchema);
