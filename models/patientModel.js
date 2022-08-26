const mongoose = require("mongoose");
const User = require("./userModel");

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dob: Date,
    bloodGroup: String,
    healthHistory: String,
    address: String,
    feedback: String,
    socketId: String,
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

patientSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "name",
  });
  next();
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
