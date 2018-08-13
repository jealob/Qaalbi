const router = require("express").Router();
const usersRoutes = require("./user");

// Users routes
router.use("/users", usersRoutes);

module.exports = router;
