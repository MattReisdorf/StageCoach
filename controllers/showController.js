const db = require('../models')

module.exports = {
    findAllShows: (req, res) => {
        db.Show
            .find({}).then(showData => res.json(showData))
    }
}