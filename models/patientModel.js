const mongoose = require("mongoose");
const User = require("./userModel");

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dob: Date,
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
