const sequelize = require('../config/connection');
const { Artist, Venue, Show } = require('../models');

const artistData = require('./artistData.json');
const venueData = require('./venueData.json')
const showData = require('./showData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const artists = await Artist.bulkCreate(artistData, {
    individualHooks: true,
    returning: true,
  });

  const venues = await Venue.bulkCreate(venueData, {
      individualHooks: true,
      returning: true,
  });

  const shows = await Show.bulkCreate(showData, {
    individualHooks: true,
    returning: true,
});

  process.exit(0);
};

seedDatabase();