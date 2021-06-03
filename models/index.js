const Venue = require('./venue');
const Artist = require('./artist');
const Show = require('./show');

Artist.hasMany(Show, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
});

Venue.hasMany(Show, {
    foreignKey: 'venue_id',
    onDelete: 'CASCADE'
});

Show.belongsToMany(Artist, {
    foreignKey: 'artist_id'
});

Show.belongsToMany(Venue, {
    foreignKey: 'venue_id'
});

module.exports = {
    Show,
    Venue,
    Artist
};