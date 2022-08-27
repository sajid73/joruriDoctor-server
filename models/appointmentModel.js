const mongoose = require("mongoose");
const Doctor = require("./doctorModel");
const Patient = require("./patientModel");

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.ObjectId,
      ref: "Doctor",
      required: [true, "Doctor must de selected"],
    },
    patientId: {
      type: mongoose.Schema.ObjectId,
      ref: "Patient",
      required: [true, "A patient must de defined"],
    },
    isEmergency: {
      type: Boolean,
      default: false
    },
    problem: {
      type: String,
      required: [true, "Problem must de defined"],
    },
    appointmentTime: {
      type: Date,
      required: function () { return this.isEmergency === false }
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    prescription: String,
    exams: String,
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

appointmentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "patientId",
    select: "socketId",
  });
  this.populate({
    path: "doctorId",
    select: "fees rating service_hours"
  })
  next();
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
