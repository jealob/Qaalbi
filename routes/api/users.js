const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//Matches with "/api/users"
router.route("/:email")
  .get(usersController.findByEmail)
  .post(usersController.findByEmailAndUpsert);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//Events routes
router.route("/events")
.get(usersController.findAllEvents)
.post(usersController.createEvent);




module.exports = router;
