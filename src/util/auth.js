
const Campaign = require('../models/campaign');
const Player = require('../models/player');

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must sign in first');
        return res.redirect('/');
    }
    next();
}

module.exports.isCampaignOwner = async (req, res, next) => {
    const { id } = req.params;
    if (!req.user.campaigns.includes(id)) {
        req.flash('error', 'You do not have access to this campaign');
        return res.redirect(`/`);
    }
    next();
}
