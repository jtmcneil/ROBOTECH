const express = require('express');
const router = express.Router();

const catchAsync = require('../util/catchAsync');

const campaign = require('../controllers/campaign');

router.route('/')
    .get(catchAsync(campaign.renderIndex));

router.route('/:id')
    .get(catchAsync(campaign.renderCampaign));

module.exports = router;