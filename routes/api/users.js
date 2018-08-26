const router = require("express").Router();
const usersController = require("../../controllers/usersController");

<<<<<<< HEAD
//Matches with "/api/users"
router.route("/login")
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
=======


router.route("/:token")
  .get(usersController.findByToken)
//Matches with "/api/users"
router.route("/:email")
  .get(usersController.findByEmail)
  .post(usersController.findByEmailAndUpsert);

// Matches with "/api/users/:id"
router.route("/:id")
>>>>>>> b2397c7c125637cf502030ae6bd4f7dedd3a673a
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

<<<<<<< HEAD
// router
//   .route("/test")
//   .get(usersController.test);
=======
  





>>>>>>> b2397c7c125637cf502030ae6bd4f7dedd3a673a

module.exports = router;
