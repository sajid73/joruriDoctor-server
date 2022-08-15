const express = require("express");
const {
  createAppointment,
  updateAppointment,
  appointmentList,
  getAppointment,
} = require("../controllers/appointment.controller");

const router = express.Router();

router.route("/").post(createAppointment).get(appointmentList);

router.route("/:id").get(getAppointment).patch(updateAppointment);

module.exports = router;