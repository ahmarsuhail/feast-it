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
  applicant: {type: Sequelize.STRING},
  facilitytype: {type: Sequelize.STRING},
  cnn: {type: Sequelize.STRING},
  locationdescription: {type: Sequelize.STRING},
  address: {type: Sequelize.STRING},
  blocklot: {type: Sequelize.STRING},
  lot: {type: Sequelize.STRING},
  permit: {type: Sequelize.STRING},
  status: {type: Sequelize.STRING},
  fooditems: {type: Sequelize.TEXT},
  x: {type: Sequelize.FLOAT},
  y: {type: Sequelize.FLOAT},
  latitude: {type: Sequelize.FLOAT},
  longitude: {type: Sequelize.FLOAT},
  schedule: {type: Sequelize.STRING},
  dayshours: {type: Sequelize.STRING},
  noisent: {type: Sequelize.STRING},
  approved: {type: Sequelize.STRING},
  received: {type: Sequelize.STRING},
  priorpermit: {type: Sequelize.NUMERIC},
  expirationdate: {type: Sequelize.STRING},
  location: {type: Sequelize.GEOMETRY}
}, {
  sequelize,
  modelName: 'restaurant'
  // options
});

module.exports = Restaurant;
