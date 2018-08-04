const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

// Matches with "/api/books"
router.route("/login")
  .get(UsersController.findAll)
  .post(UsersController.create);

// Matches with "/api/books/:id"
router
  .route("/sign_in/:id")
  .get(UsersController.findById)
  .put(UsersController.update)
  .delete(UsersController.remove);

module.exports = router;
