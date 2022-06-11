const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");

const app = express();

// middlewares
app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json());

// routes
app.use("/user", user);

app.all("*", (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  return res.status(404).json({
    error: true,
    message: "Route is not found!",
  });
});

module.exports = app;
