const router = require("express").Router();
const usersRoutes = require("./users.js");
const eventsRoutes = require("./events.js");

// Users routes
router.use("/users", usersRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
