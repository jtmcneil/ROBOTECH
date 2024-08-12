
const Skill = require('../models/skill');

module.exports.getSkills = async (req, res) => {
    const skillsList = req.params.ids.split(',')
    const skills = await Skill.find({_id : { $in: skillsList }});
    res.json( skills );
}