const express = require('express');
const router = express.Router();
const suggestionsService = require('./suggestions.service');

// routes
router.get('/', getSuggestions);

module.exports = router;

function getSuggestions(req, res, next) {
    suggestionsService.getSuggestions(req.query)
        .then((restaurants) => res.json(restaurants))
        .catch(err => next(err));
}
