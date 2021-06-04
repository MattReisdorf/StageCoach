const db = require('../models')

module.exports = {
    findAllArtists: (req, res) => {
        db.Artist
            .findAll.then(artistData => res.json(artistData))
    }
}