const Doctor = require("../models/doctorModel");
const { authSignup } = require("./auth.controller");
const { signup } = require("./user.controller");

module.exports.createDoctor = async (req, res) => {
  try {
    const { user, token } = await authSignup(req, res, "doctor");
    const doctor = await Doctor.create({ userId: user._id, ...req.body });
    return res.status(201).json({
      user: user,
      doctor,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on adding doctor!",
    });
  }
};

module.exports.findDoctors = async (req, res) => {
  try {
    console.log(req.query);
    const doctors = await Doctor.find(req.query).populate("userId");

    return res.status(200).json({
      doctors,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on finding doctor!",
    });
  }
};
