const router = require("express").Router();
const { Venue, Show } = require("../../models");

// get all venues
router.get("/", async (req, res) => {
  try {
    const venueData = await Venue.findAll();
    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single venues
router.get("/:id", async (req, res) => {
  try {
    const venueData = await Venue.findByPk(req.params.id);

    if (!venueData) {
      res.status(404).json({ message: "No venue found with this id!" });
      return;
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all shows for one venue

router.get("/:id/shows", async (req, res) => {
  try {
    console.log("show api search test")
    // var today = new Date();
    const venueShowData = await Show.findAll({
      where: {
        venue_id: req.params.id
      }
    });

    console.log(venueShowData);
    if (!venueShowData) {
      res.status(404).json({ message: "No shows found with this venue id!" });
      return;
    }

    res.status(200).json(venueShowData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a venue
router.post("/", async (req, res) => {
  try {
    const venueData = await Venue.create(req.body);
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a venue?
router.delete("/:id", async (req, res) => {
  try {
    const venueData = await Venue.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!venueData) {
      res.status(404).json({ message: "No venue found with this id!" });
      return;
    }
    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
