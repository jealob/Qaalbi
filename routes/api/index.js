const router = require("express").Router();
const usersRoutes = require("./Users");

// Users routes
router.use("/users", usersRoutes);

module.exports = router;
