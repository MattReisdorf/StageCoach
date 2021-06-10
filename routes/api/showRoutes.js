const router = require("express").Router();
const { Show, Venue, Artist } = require("../../models");
const sequelize = require('sequelize')

// get all shows
router.get("/", async (req, res) => {
  try {
    const showData = await Show.findAll();
    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all shows in a certain city

router.get("/city/:city", async (req, res) => {
  try {
    const showData = await Show.findAll({
      where: {'$Venue.city$': req.params.city
      },
      attributes: ['id', 'time', 'description',[sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date_formed']],
      include: [{
        model: Venue,
        attributes: ["venue_name", "city", "state"]
      },{ model: Artist, attributes: ["artist_name"]}
    ]
    });
    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get a single show
router.get("/:id", async (req, res) => {
  try {
    const showData = await Show.findByPk(req.params.id, {
      attributes: ['id', 'artist_id', 'venue_id', 'time', 'description', [sequelize.fn('date_format', sequelize.col('date'), '%Y-%m-%d'), 'date_formed'], [sequelize.fn('date_format', sequelize.col('time'), '%h:%i%p'), 'time_formed']],
      include: [
        {
          model: Venue
        },
        {
          model: Artist
        }
      ]
    });

    if (!showData) {
      res.status(404).json({ message: "No show found with this id!" });
      return;
    }

    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a show
router.post("/", async (req, res) => {
  try {
    const showData = await Show.create(req.body);
    res.status(200).json(showData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a show?
router.delete("/:id", async (req, res) => {
  try {
    const showData = await Show.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!showData) {
      res.status(404).json({ message: "No showfound with this id!" });
      return;
    }
    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
