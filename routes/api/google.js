const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/")
  .get(googleController.findAll);
  

 

module.exports = router;
