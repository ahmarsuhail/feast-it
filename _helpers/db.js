const Sequelize = require('sequelize');

const POSTGRES_URL = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@feastit.cpxwcp2hzt3j.us-east-1.rds.amazonaws.com:5432/postgres`

const sequelize = new Sequelize(POSTGRES_URL,
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

