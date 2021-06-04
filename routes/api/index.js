const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const venueRoutes = require("./venueRoutes");
const showRoutes = require("./showRoutes");

router.use("/artists", artistRoutes);
router.use("/venues", venueRoutes);
router.use("/shows", showRoutes);

module.exports = router;
