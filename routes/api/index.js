const router = require("express").Router();
const movieRoutes = require("./movies");
const googleRoutes = require("./google");
const rapidRoutes = require("./rapid");
const omdbRoutes = require("./omdb");
const userRoutes = require("./user");


router.use("/movies", movieRoutes);
router.use("/googlebooks", googleRoutes);
router.use("/rapid", rapidRoutes);
router.use("/omdb", omdbRoutes);
router.use("/users", userRoutes)


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;