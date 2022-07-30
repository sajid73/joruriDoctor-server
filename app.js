const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");
const doctor = require("./routes/doctor.route");
const patient = require("./routes/patient.route");
const appointment = require("./routes/appointment.route");

const app = express();

// middlewares
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());

// routes
app.use("/user", user);
app.use("/patient", patient);
app.use("/doctor", doctor);
app.use("/appointment", appointment);

app.all("*", (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  return res.status(404).json({
    error: true,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
