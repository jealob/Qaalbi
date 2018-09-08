const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");


//Events routes
router.route("/")
    .get(eventsController.findAllEvents)
    .post(eventsController.createEvent);

// Matches with "/api/users/:id"
router.route("/:year/:month/:firstname/:lastname")
    .get(eventsController.findByName);
module.exports = router;