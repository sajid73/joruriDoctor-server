const express = require("express");
const {
  createDoctor,
  findDoctors,
} = require("../controllers/doctor.controller");

const router = express.Router();

router.route("/").post(createDoctor).get(findDoctors);

module.exports = router;
