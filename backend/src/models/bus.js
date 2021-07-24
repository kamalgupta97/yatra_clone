const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const busSchema = new Schema(
  {
    busType: {
      type: String,
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: false,
    },
    routes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Routes",
        required: true,
      },
    ],
    liveTracking: {
      type: Number,
      required: true,
    },
    fare: {
      type: Number,
      required: false,
    },
    busServices: {
      ac: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
      cctv: { type: Boolean, default: false },
      waterBottles: { type: Boolean, default: false },
      vaccinatedStaff: { type: Boolean, default: false },
      primo: { type: Boolean, default: false },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Buses", busSchema);
