const express = require("express");
const { signup, signin, findMe } = require("../controllers/user.controller");

const router = express.Router();

// router.route("/signup").post((req, res, next) => {
//   return res.status(200).json({
//     message: "DONE",
//   });
// });
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/me").post(findMe);

module.exports = router;
