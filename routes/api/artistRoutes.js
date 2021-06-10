const router = require("express").Router();
const { Artist, Show, Venue } = require("../../models");

// get all artists
router.get("/", async (req, res) => {
  try {
    const artistData = await Artist.findAll({
      order: [['artist_name', 'ASC']]
    });
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single artist
router.get("/:id", async (req, res) => {
  try {
    const artistData = await Artist.findByPk(req.params.id);

    if (!artistData) {
      res.status(404).json({ message: "No artist found with this id!" });
      return;
    }

    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all shows for one artist

router.get("/:id/shows", async (req, res) => {
  try {
    console.log("show api search test")
    const artistShowData = await Show.findAll({
      where: {
        artist_id: req.params.id
      },
      include: [{
        model: Venue,
        attributes: ["venue_name"]
      }]
    });
    console.log(artistShowData);
    if (!artistShowData) {
      res.status(404).json({ message: "No shows found with this artist id!" });
      return;
    }
    res.status(200).json(artistShowData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create an artist
router.post("/", async (req, res) => {
  try {
    const artistData = await Artist.create(req.body);
    res.status(200).json(artistData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete an artist?
router.delete("/:id", async (req, res) => {
  try {
    const artistData = await Artist.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!artistData) {
      res.status(404).json({ message: "No artist found with this id!" });
      return;
    }
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
