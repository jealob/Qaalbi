const router = require("express").Router();
const usersRoutes = require("./users.js");
const eventsRoutes = require("./events.js");
const appointments = require("./appointments.js");

// Users routes
router.use("/users", usersRoutes);
router.use("/events", eventsRoutes);
router.use("/appointments", appointments);
module.exports = router;
