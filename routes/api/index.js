const router = require("express").Router();
const UsersRoutes = require("./users");

// User routes
router.use("/user", UsersRoutes);

module.exports = router;
