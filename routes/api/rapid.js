const router = require("express").Router();
const rapidController = require("../../controllers/rapidController");

// http://localhost:3000/api/rapid/?Ids=Movie%2F200000

// Matches with "/api/books"
router.route("/")
 .get(rapidController.findAll)

 router
 .route("/:genre")
 .get(rapidController.findGenre)

 router
 .route("/provider/:providers")
 .get(rapidController.findProvider)

 router
 .route("/:providers/:genre")
 .get(rapidController.findProviderAndGenre)

 module.exports = router;