const router = require("express").Router();
const MovieController = require("../../controllers/MovieController");

// Matches with "/api/books"
router.route("/")
  .get(MovieController.findSaved)
  .post(MovieController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(MovieController.findById)
  
  .delete(MovieController.remove);


  router.route("/:genre")
  .put(MovieController.update);
module.exports = router;
