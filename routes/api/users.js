const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/:token")
  .get(usersController.findByToken)

//Matches with "/api/users"
router.route("/:email")
  .get(usersController.findByEmail)
  .post(usersController.findByEmailAndUpsert);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
