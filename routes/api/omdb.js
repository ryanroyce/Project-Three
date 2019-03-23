const router = require("express").Router();
const omdbController = require("../../controllers/omdbController");



// Matches with "/api/books"
router.route("/")
  .get(omdbController.findAll)

module.exports = router;



