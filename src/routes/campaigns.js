const express = require('express');
const router = express.Router();
const campaign = require('../controllers/campaign');
const catchAsync = require('../util/catchAsync');
const { isLoggedIn } = require('../util/auth');

router.route('/')
    .get(isLoggedIn, catchAsync(campaign.renderIndex));

router.route('/new')
    .post(isLoggedIn, catchAsync(campaign.createCampaign));

router.route('/:id')
    .get(isLoggedIn, catchAsync(campaign.renderCampaign))
    .post(isLoggedIn, catchAsync(campaign.createCharacter));

module.exports = router;