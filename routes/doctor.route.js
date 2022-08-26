const express = require("express");
const {
  createDoctor,
  findDoctors,
  updateDoctor,
} = require("../controllers/doctor.controller");

const router = express.Router();

router.route("/").post(createDoctor).get(findDoctors);

router.route("/:id").patch(updateDoctor);

module.exports = router;
