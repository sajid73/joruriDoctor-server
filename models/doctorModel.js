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
    qualifications: String,
    fees: {
      type: Number,
      required: [true, "Fee amount is required"],
    },
    joined: {
      type: Date,
      default: Date.now(),
    },
    service_hours: String,
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

doctorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "name avatar",
  });
  next();
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
