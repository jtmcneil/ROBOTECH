
const Player = require('../models/player');
const Occupation = require('../models/occupation');
const Skill = require('../models/skill');

module.exports.getPlayer = async (req, res) => {
    const player = await Player.findById(req.params.id)
        .populate('occupation')
        .populate('occSkills.skill')
        .populate('otherSkills.skill');
    res.json(player);
}