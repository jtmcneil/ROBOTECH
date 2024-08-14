
const Player = require('../models/player');
const Occupation = require('../models/occupation');
const Skill = require('../models/skill');
const s3 = require('../util/s3');


module.exports.getPlayer = async (req, res) => {
    const player = await Player.findById(req.params.id)
        .populate('occupation')
        .populate('occSkills.skill')
        .populate('otherSkills.skill');
    res.json(player);
}

module.exports.getImgUploadUrl = async (req, res) => {
    const url = await s3.generateUploadURL();
    res.json({url});
}