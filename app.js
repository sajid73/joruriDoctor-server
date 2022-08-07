const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");
const doctor = require("./routes/doctor.route");
const patient = require("./routes/patient.route");
const appointment = require("./routes/appointment.route");
const cors = require("cors");

const corsOptions = {
  origin: ['http://localhost:3000', 'https://joruri-doctor.netlify.app'],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

const app = express();

// middlewares
app.use(cors(corsOptions));
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
