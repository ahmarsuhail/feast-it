const sequelizeInstance = require('../_helpers/db')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const Restaurant = require('./restaurants.model');

module.exports = {
    getSuggestions
}

/**
 * Handles request, and calls appropriate function depending 
 * on if long & lat are provided or not.
 */
async function getSuggestions({ q, longitude, latitude }) {

    if (longitude && latitude) {
        const result = await getSuggestionsWithDistance(q, longitude, latitude);
        return result[0];
    }
    else
        return getSuggestionsWithoutDistance(q, longitude, latitude)

}

/**
 * Method to query DB, when only search param is provided
 * @param {*} q 
 */
async function getSuggestionsWithoutDistance(q) {

    return await Restaurant.findAll(
        {
            attributes:
                ['applicant', 'latitude', 'longitude'],
            where: {
                [Op.or]: [
                    { applicant: { [Op.iRegexp]: q } },
                    { facilitytype: { [Op.iRegexp]: q } },
                    { locationdescription: { [Op.iRegexp]: q } },
                    { address: { [Op.iRegexp]: q } },
                    { fooditems: { [Op.iRegexp]: q } }
                ]
            }
        },
    )

}

/**
 * Method to query DB when longitude and latitude are provided,
 * returns results sorted in ascending order by distance
 * 
 * @param {search parameter} q 
 * @param {customer longitude} longitude 
 * @param {customer latitude} latitude 
 */
async function getSuggestionsWithDistance(q, longitude, latitude) {

    const query = `
    SELECT applicant, longitude, latitude, ST_Distance(
        ST_MakePoint(longitude, latitude),
        ST_MakePoint(${longitude}, ${latitude})
    ) AS distance
    FROM
        restaurants
    WHERE
        applicant ~* '${q}'
        OR
        facilitytype ~* '${q}'
        OR
        locationdescription ~* '${q}'
        OR
        address ~* '${q}'
        OR
        fooditems  ~* '${q}'
    ORDER BY
        distance ASC
    `

    return await sequelizeInstance.query(query);
}
