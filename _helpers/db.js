const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://feastIt:feastit1994!@feastit.cpxwcp2hzt3j.us-east-1.rds.amazonaws.com:5432/postgres',
                                {
                                    define: {
                                        timestamps: false
                                    }
                                });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = sequelize;

