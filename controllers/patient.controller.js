const Patient = require("../models/patientModel");
const { authSignup } = require("./auth.controller");

module.exports.createPatient = async (req, res) => {
  try {
    const { user, token } = await authSignup(req, res);
    const patient = await Patient.create({ userId: user._id, ...req.body });
    return res.status(201).json({
      user: user,
      patient,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on adding patient!",
    });
  }
};

module.exports.findPatients = async (req, res) => {
  try {
    const patients = await Patient.find(req.query).populate("userId");

    return res.status(200).json({
      patients,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on finding patient!",
    });
  }
};
