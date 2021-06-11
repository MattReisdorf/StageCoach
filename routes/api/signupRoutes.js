const router = require("express").Router();
const { Show, Venue, Artist } = require("../../models");
const sequelize = require('sequelize');

router.post("/artist", async (req, res) => {
  console.log('ARTIST SIGNUP BACKEND ROUTE HIT!!', req.body)
    try {
        console.log(req.body)

        const artistData = await Artist.create(req.body);

        console.log("ARTIST CREATE HIT: ", artistData)

        req.session.save(() => {
            req.session.user_id = artistData.id;
            req.session.logged_in = true;
            req.session.name = artistData.username;
            console.log(req.session.name, req.session.logged_in, req.session.user_id)
        })
        console.log(req.session)
        res.status(200).json(artistData);
      } catch (err) {
        console.log('artist backend got an error', err)
        res.status(400).json(err);
      }
});

router.post("/venue", async (req, res) => {
  console.log('VENUE SIGNUP BACKEND ROUTE HIT!!', req.body)
    try {
        console.log(req.body)
        const venueData = await Venue.create(req.body);

        console.log("VENUE CREATE HIT: ",venueData)

        req.session.save(() => {
            req.session.user_id = venueData.id;
            req.session.logged_in = true;
            req.session.name = venueData.username;
            console.log(req.session.name, req.session.logged_in, req.session.user_id)
           // console.log(venueData.id, venueData.username) 
        })
        //console.log("I am logging session here!!!", req.session)
        res.status(200).json(venueData);
       
      } catch (err) {
        console.log('the backend route got an error', err)
        res.status(400).json(err);
      }
});

module.exports = router;