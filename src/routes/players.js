const express = require('express');
const router = express.Router()

const catchAsync = require('../util/catchAsync');

const   player = require('../controllers/player');

router.route('/imgUrl')
    .get(catchAsync(player.getImgUploadUrl));

router.route('/:id')
    .get(catchAsync(player.getPlayer));

module.exports = router;