const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

require("dotenv").config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Load model files dynamically
fs.readdirSync(path.join(__dirname, 'models'))
  .filter(file => file.endsWith('.js') && file !== basename)
  .forEach(file => {
    const model = require(path.join(__dirname, 'models', file));
    model(sequelize);
  });

// Define the relationships
const { Driver, Team } = sequelize.models;

Driver.belongsToMany(Team, { through: 'DriverTeam' });
Team.belongsToMany(Driver, { through: 'DriverTeam' });

module.exports = {
  sequelize, // You can access the sequelize instance if needed
  Driver,
  Team,
};
