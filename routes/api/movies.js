const router = require("express").Router();
const MovieController = require("../../controllers/MovieController");

// Matches with "/api/books"
router.route("/")
  .get(MovieController.findAll)
  .post(MovieController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(MovieController.findById)
  .put(MovieController.update)
  .delete(MovieController.remove);

module.exports = router;
