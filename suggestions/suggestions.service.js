const db = require('../_helpers/db')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const Restaurant = require('./restaurants.model');

module.exports = {
    getSuggestions
}

async function getSuggestions(query)  {
    
    const restaurants = await Restaurant.findAll(
                                {
                                    attributes: ['applicant', 'latitude',  'longitude'],
                                    where: {
                                        [Op.or]: [
                                            {applicant: {[Op.iRegexp]: query.q}},
                                            {facilitytype: {[Op.iRegexp]: query.q}},
                                            {locationdescription: {[Op.iRegexp]: query.q}},
                                            {address: {[Op.iRegexp]: query.q}},
                                            {fooditems: {[Op.iRegexp]: query.q}}
                                        ]
                                      }
                                },
                                )
    
    return restaurants.map(restaurant => restaurant.dataValues);
}

