const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const venueRoutes = require("./venueRoutes");
const showRoutes = require("./showRoutes");
const loginRoutes = require('./loginRoutes');

router.use("/artists", artistRoutes);
router.use("/venues", venueRoutes);
router.use("/shows", showRoutes);
router.use("/login", loginRoutes);


module.exports = router;
