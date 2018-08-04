const router = require("express").Router();
const UsersRoutes = require("./Users");

// Book routes
router.use("/auth", UsersRoutes);

module.exports = router;
