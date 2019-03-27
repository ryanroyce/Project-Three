const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
const rapidRoutes = require("./rapid");
const omdbRoutes = require("./omdb");


router.use("/books", bookRoutes);
router.use("/googlebooks", googleRoutes);
router.use("/rapid", rapidRoutes);
router.use("/omdb", omdbRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;