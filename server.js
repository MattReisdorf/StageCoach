const express = require("express");
const session = require('express-session');
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();

// const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sess = {
  secret: 'Forg for president',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

