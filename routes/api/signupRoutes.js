const router = require("express").Router();
const { Show, Venue, Artist } = require("../../models");
const sequelize = require('sequelize');

router.post("/signup/artists", async (req, res) => {
    try {
        console.log(req.body)

        const artistData = await Artist.create(req.body);

        console.log(artistData)

        req.session.save(() => {
            req.session.user_id = artistData.id;
            req.session.logged_in = true;
            req.session.name = artistData.username;
        })

        res.status(200).json(showData);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.post("/signup/venues", async (req, res) => {
    try {
        console.log(req.body)

        const venueData = await Venue.create(req.body);

        console.log(venueData)

        req.session.save(() => {
            req.session.user_id = venueData.id;
            req.session.logged_in = true;
            req.session.name = venueData.username;
        })

        res.status(200).json(showData);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;