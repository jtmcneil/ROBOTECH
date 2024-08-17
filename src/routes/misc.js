const express = require('express');
const router = express.Router()

router.get('/disclaimer', (req, res) => {res.render('misc/disclaimer')});
router.get('/about', (req, res) => {res.render('misc/about')})

module.exports = router;