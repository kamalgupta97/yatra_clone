const mongoose = require("mongoose");

const dropBoardSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    // state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("DropBoards", dropBoardSchema);
// for seggesions
