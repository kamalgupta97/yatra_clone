const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Customers", customerSchema);
