const express = require('express');
const app = express();
const errorHandler = require('./_helpers/error-handler');

// api routes
app.use('/api/v1/suggestions', require('./suggestions/suggestions.controller'));

// global error handler
app.use(errorHandler);

// start server
const port =  4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});