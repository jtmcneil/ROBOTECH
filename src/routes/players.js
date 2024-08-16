const express = require('express');
const router = express.Router()
const player = require('../controllers/player');
const catchAsync = require('../util/catchAsync');
const { isLoggedIn } = require('../util/auth');

router.route('/imgUrl')
    .get(isLoggedIn, catchAsync(player.getImgUploadUrl));

router.route('/:id')
    .get(isLoggedIn, catchAsync(player.getPlayer));

module.exports = router;