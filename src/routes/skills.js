const express = require('express');
const router = express.Router()
const skill = require('../controllers/skill');
const catchAsync = require('../util/catchAsync');
const { isLoggedIn } = require('../util/auth');

router.route('/:ids')
    .get(isLoggedIn ,catchAsync(skill.getSkills));

module.exports = router;