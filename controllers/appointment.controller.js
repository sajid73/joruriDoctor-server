const Appointment = require("../models/appointmentModel");

module.exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    return res.status(201).json({
      appointment,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on creating appointment!",
    });
  }
};

module.exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      appointment,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on creating appointment!",
    });
  }
};

module.exports.getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate("patientId").populate("doctorId");
    return res.status(200).json({
      appointment,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on creating appointment!",
    });
  }
};

module.exports.appointmentList = async (req, res) => {
  try {
    const { userId, role } = req.query;
    if (role === "patient") {
      const appiontments = await Appointment.find({ patientId: userId })
        .populate("patientId")
        .populate("doctorId");
      return res.status(200).json({
        appiontments,
      });
    } else if (role === "doctor") {
      const appiontments = await Appointment.find({
        doctorId: userId,
        appointmentTime: {
          $eq: new Date().setUTCHours(0, 0, 0, 0)
        },
        isPaid: true
      })
        .populate("patientId")
        .populate("doctorId");
      return res.status(200).json({
        appiontments,
      });
    }
    // const appiontments = await Appointment.find();
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Can't find appointments as request",
    });
  }
};
