const User = require("../models/userModel");
const {
  hashPassword,
  comparePassword,
  generateJWT,
} = require("../utils/authUtils");
const jwt = require("jsonwebtoken");
const { authSignup } = require("./auth.controller");

module.exports.signup = async (req, res) => {
  try {
    delete req.body.role;
    const { user, token } = await authSignup(req, res);
    return res.status(201).json({
      user,
      token,
      message: "Registration completed!",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on signup!",
    });
  }
};

module.exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    const matchPassword = await comparePassword(
      req.body.password,
      user.password
    );
    if (!matchPassword) {
      return res.status(500).json({
        message: "Wrong password!",
      });
    }
    const userObj = JSON.parse(JSON.stringify(user));
    delete userObj.password;
    const token = await generateJWT(userObj._id);
    return res.status(201).json({
      user: userObj,
      token: token,
      message: "Sign in completed!",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on signin!",
    });
  }
};

module.exports.findMe = async (req, res) => {
  try {
    const decode = jwt.decode(req.body.token);
    const user = await User.findById(decode.id);
    return res.status(201).json({
      user: user,
      token: req.body.token,
      message: "User data pulled",
    });
  } catch (error) {
    return res.status(500).json({
      error,
      error: error.message,
      message: "Something went wrong on getting user data!",
    });
  }
};
