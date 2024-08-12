const express = require('express');
const router = express.Router()

const catchAsync = require('../util/catchAsync');

const occupation = require('../controllers/occupation');

router.route('/requirements')
    .get(catchAsync(occupation.getRequirements));

router.route('/:id')
    .get(catchAsync(occupation.getOccupation));


module.exports = router;