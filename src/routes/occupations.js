const express = require('express');
const router = express.Router()
const occupation = require('../controllers/occupation');
const catchAsync = require('../util/catchAsync');
const { isLoggedIn } = require('../util/auth');

router.route('/requirements')
    .get(isLoggedIn, catchAsync(occupation.getRequirements));

router.route('/:id')
    .get(isLoggedIn, catchAsync(occupation.getOccupation));


module.exports = router;