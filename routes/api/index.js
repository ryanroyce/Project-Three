const router = require("express").Router();
const bookRoutes = require("./books");
// const googleRoutes = require("./google");
const rapidRoutes = require("./rapid");
const omdbRoutes = require("./omdb");

// Book routes
router.use("/books", bookRoutes);
router.use("/rapid", rapidRoutes);
router.use("/omdb", omdbRoutes);

module.exports = router;
