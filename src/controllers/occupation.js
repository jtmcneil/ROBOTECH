
const Occupation = require('../models/occupation');

module.exports.getOccupation = async (req, res) => {
    const occupation = await Occupation.findById(req.params.id)
    res.json(occupation);
}

module.exports.getRequirements = async(req, res) => {
    const requirements = await Occupation.find({},{ _id: 1, name: 1, requirements: 1 });
    res.json(requirements);
}