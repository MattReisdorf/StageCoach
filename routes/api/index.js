const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const venueRoutes = require("./venueRoutes");
const showRoutes = require("./showRoutes");
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');

router.use("/artists", artistRoutes);
router.use("/venues", venueRoutes);
router.use("/shows", showRoutes);
router.use("/login", loginRoutes);
router.use('/signup', signupRoutes);


module.exports = router;
