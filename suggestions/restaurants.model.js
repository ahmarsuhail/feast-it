const Sequelize = require('sequelize');
const sequelize = require('../_helpers/db')

const Model = Sequelize.Model;
class Restaurant extends Model {}

Restaurant.init({
  // attributes
  locationid: {
      type: Sequelize.NUMBER,
      primaryKey: true
  },
  Applicant: {type: Sequelize.STRING},
  FacilityType: {type: Sequelize.STRING},
  cnn: {type: Sequelize.STRING},
  LocationDescription: {type: Sequelize.STRING},
  Address: {type: Sequelize.STRING},
  blocklot: {type: Sequelize.STRING},
  lot: {type: Sequelize.STRING},
  permit: {type: Sequelize.STRING},
  Status: {type: Sequelize.STRING},
  FoodItems: {type: Sequelize.TEXT},
  X: {type: Sequelize.FLOAT},
  Y: {type: Sequelize.FLOAT},
  Latitude: {type: Sequelize.FLOAT},
  Longitude: {type: Sequelize.FLOAT},
  Schedule: {type: Sequelize.STRING},
  dayshours: {type: Sequelize.STRING},
  NOISent: {type: Sequelize.STRING},
  Approved: {type: Sequelize.STRING},
  Received: {type: Sequelize.STRING},
  PriorPermit: {type: Sequelize.NUMERIC},
  ExpirationDate: {type: Sequelize.STRING},
  Location: {type: Sequelize.GEOMETRY}
}, {
  sequelize,
  modelName: 'restaurant'
  // options
});

module.exports = Restaurant;
