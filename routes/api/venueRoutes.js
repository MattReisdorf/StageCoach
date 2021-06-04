const router = require('express').Router();
const { Venue } = require('../../models');

// get all venues
router.get('/', async (req, res) => {
    try {
        const venueData = await Venue.findAll();
        res.status(200).json(venueData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get a single venues
router.get('/:id', async (req, res) => {
    try {
        const venueData = await Venue.findByPk(req.params.id);
    
        if (!venueData) {
          res.status(404).json({ message: 'No venue found with this id!' });
          return;
        }
    
        res.status(200).json(venueData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
// create a venue
router.post('/', async (req, res) => {
    try {
        const venueData = await Venue.create(req.body);
        res.status(200).json(venueData);
    } catch (err) {
        res.status(400).json(err);
    }
})

// delete a venue?
router.delete('/:id', async (req, res) => {
    try {
        const venueData = await Venue.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!venueData) {
            res.status(404).json({ message: 'No venue found with this id!' });
            return
        }
        res.status(200).json(venueData);
    } catch (err) {
        res.status(500).json(err);
    }
})