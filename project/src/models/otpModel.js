const mongoose = require("mongoose");

exports.otpModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    otp: {
      type: String,
      required: [true, "OTP is required"],
    },
    expires: {
      type: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("OTP", this.otpModel);
