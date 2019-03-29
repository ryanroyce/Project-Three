const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/sign-up")
  .post(userController.create);


router.route("/")
  .post(userController.validate);

router.route("/check")
  .get(userController.checkUsername);
  
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
