const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");


//Events routes
router.route("/")
.get(eventsController.findAllEvents)
.post(eventsController.createEvent);

module.exports = router;