const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('campaigns/index');
    });

router.route('/:id')
    .get((req, res) => {
        const campaign = {
            title: "Battle of Macross City",
            players: [
                {
                    name: "Rick Hunter",
                    level: 5
                },
                {
                    name: "Roy Focker",
                    level: 2
                }
            ]
        }
        res.locals.title = campaign.title
        res.render('campaigns/show', { campaign });
    })

module.exports = router;