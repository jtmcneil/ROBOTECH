
const Campaign = require('../models/campaign');
const Player = require('../models/player');

module.exports.renderIndex = async (req, res) => {
    const campaigns = await Campaign.find({});
    res.render('campaigns/index', { campaigns });
}

module.exports.renderCampaign = async (req, res) => {
    const campaign = await Campaign.findById(req.params.id)
        .populate('players');
    res.render('campaigns/show', { campaign });
}