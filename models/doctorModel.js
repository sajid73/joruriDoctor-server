const mongoose = require("mongoose");
const User = require("./userModel");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    specilities: {
      type: [String],
    },
    experience: Number,
    working: String,
    fees: {
      type: Number,
      required: [true, "Fee amount is required"],
    },
    joined: {
      type: Date,
      default: Date.now(),
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
