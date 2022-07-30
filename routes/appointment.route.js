const express = require("express");
const {
  createAppointment,
  updateAppointment,
  appointmentList,
} = require("../controllers/appointment.controller");

const router = express.Router();

router.route("/").post(createAppointment).get(appointmentList);

router.route("/:id").patch(updateAppointment);

module.exports = router;
