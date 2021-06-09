const router = require("express").Router();
const { Show } = require("../../models");

// get all shows
router.get("/", async (req, res) => {
  try {
    const showData = await Show.findAll();
    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all shows on a certain date
// get all shows
router.get("/date/:date", async (req, res) => {
  try {
    const showData = await Show.findAll({
      where: {date: req.params.date
      }
    });
    res.status(200).json(showData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get a single show
router.get("/:id", async (req, res) => {
  try {
    const showData = await Show.findByPk(req.params.id);

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
