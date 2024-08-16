
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
    const campaign = await Campaign.findById(id);
    if (!campaign.owner.equals(req.user._id)){
        req.flash('error', 'You do not have access to this campaign');
        return res.redirect(`/`);
    }
    next();
}

module.exports.isPlayerOwner = async (req, res, next) => {
    const { id } = req.params;
    const player = await Player.findById(id);
    if (!player.owner.equals(req.user._id)){
        req.flash('error', 'You do not have access to this player');
        return res.redirect(`/`);
    }
    next();
}