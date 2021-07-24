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
  seatnumber: { 
    type: [Number],
    required: true
  },
  departureTime: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number],
    required: false,
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
    required: false,
  },
  busServices: {
    type: Schema.Types.ObjectId,
    ref: "BusServices",
    required: true,
  },
});
//date
module.exports = mongoose.model("Buses", busSchema);
