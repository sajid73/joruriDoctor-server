const express = require("express");
const { findPatients } = require("../controllers/patient.controller");

const router = express.Router();

router.route("/").get(findPatients);

module.exports = router;
