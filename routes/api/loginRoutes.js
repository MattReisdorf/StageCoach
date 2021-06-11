const router = require("express").Router();
const { Venue, Artist } = require("../../models");
const sequelize = require('sequelize');

router.post('/venue', async (req, res) => {
    console.log("Logged in route hit. - venue", req.body)
    try {
      const venueData = await Venue.findOne({ where: { username: req.body.username } });
  
      console.log('Selected venues info', venueData)
  
      if (!venueData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await venueData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = venueData.id;
        req.session.logged_in = true;
        req.session.name = venueData.username;
        console.log('Venues username: ', req.session.name)
        
        res.json({ user: venueData, message: 'You are now logged in!' });
      });

  
    } catch (err) {
      res.status(400).json(err);
    }
});


router.post('/artist', async (req, res) => {
    console.log("Logged in route hit. - artist")
    console.log(req.body)
    try {
      const artistData = await Artist.findOne({ where: { username: req.body.username } });
  
      console.log('Selected artist info: ', artistData)
  
      if (!artistData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await artistData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = artistData.id;
        req.session.logged_in = true;
        req.session.name = artistData.username;
        console.log('Artist name here: ', req.session.name)
        
        res.json({ user: artistData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/logout', (req, res) => {
    console.log('hitting logout route backend')
    console.log(req.session)
    if (req.session) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;