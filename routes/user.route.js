const express = require("express");
const { signup, signin, findMe, updateMe } = require("../controllers/user.controller");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/me").post(findMe).patch(updateMe);

module.exports = router;
