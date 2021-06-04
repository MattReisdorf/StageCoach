const db = require('../models')

module.exports = {
    findAllVenues: (req, res) => {
        db.Venue
            .find({}).then(venueData => res.json(venueData))
    }
}