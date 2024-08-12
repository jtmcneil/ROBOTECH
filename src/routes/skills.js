const express = require('express');
const router = express.Router()

const catchAsync = require('../util/catchAsync');

const skill = require('../controllers/skill');

router.route('/:ids')
    .get(catchAsync(skill.getSkills));

module.exports = router;