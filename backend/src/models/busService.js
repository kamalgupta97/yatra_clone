const mongoose = require("mongoose");
const busSchema = new mongoose.Schema({
  vehicle: String,
  available: Boolean,
  //source: String,
  //seater: Number,
  //   music: Boolean,
  charging: Boolean,
  WiFi: Boolean,
  Ac: Boolean,
});

module.exports = mongoose.model("BusServices", busSchema);
