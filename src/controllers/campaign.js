
const Campaign = require('../models/campaign');
const Player = require('../models/player');
const Occupation = require('../models/occupation');
const User = require('../models/user');

module.exports.renderIndex = async (req, res) => {
    const campaigns = await Campaign.find({ _id: { $in: req.user.campaigns } });
    res.render('campaigns/index', { campaigns });
}

module.exports.createCampaign = async (req, res) => {
    const user = await User.findById(req.user._id);
    const campaign = new Campaign(req.body.campaign);
    await campaign.save();
    user.campaigns.push(campaign);
    await user.save();
    res.redirect(`/campaigns/${campaign._id}`);
}

module.exports.renderCampaign = async (req, res) => {
    const campaign = await Campaign.findById(req.params.id)
        .populate('players',{_id: 1, name: 1, img: 1});
    const occupations = await Occupation.find({}, {_id: 1, name: 1, img: 1});
    res.render('campaigns/show', { campaign, occupations });
}

module.exports.createCharacter = async (req, res) => {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    campaign.players.push(newPlayer);
    await campaign.save();
    res.redirect(`/campaigns/${id}`);
}

module.exports.editCampaign = async (req, res) => {
    const { id } = req.params;
    const campaign = await Campaign.findByIdAndUpdate(id, req.body.campaign);
    await campaign.save();
    res.redirect(`/campaigns/${id}`);
}