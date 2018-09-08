const router = require("express").Router();
const nodemailer = require("../../controllers/nodemailer");

  router.route("/")
  .post(nodemailer.bookAppointment);

module.exports = router;
