const express = require('express');
const passport = require('passport');
const user = require('../controllers/user');
const catchAsync = require('../util/catchAsync');

const router = express.Router();

router.route('/register')
    .post(catchAsync(user.register));

router.route('/login')
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/'}), catchAsync(user.login));

router.route('/logout')
    .get(user.logout);

router.get('/account', (req, res) => {res.render('users/account')});

router.route('/users/:id')
    .post(catchAsync(user.updateUser));

module.exports = router;