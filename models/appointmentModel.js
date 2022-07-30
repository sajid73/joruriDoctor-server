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
    problem: {
      type: String,
      required: [true, "Problem must de defined"],
    },
    appointmentTime: {
      type: Date,
      required: [true, "Date of appointment is required!"],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    prescription: [
      {
        medicine: String,
        description: String,
      },
    ],
    exams: [String],
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
