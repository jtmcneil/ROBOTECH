const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema =  new Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["BME", "COMMUNICATIONS", "DOMESTIC", "ELECTRICAL", "ESPIONAGE/MILITARY", 
            "FIELD SCIENTIST", "MECHANICAL", "MEDICAL", "PHYSICAL", "PILOT", "PILOT RELATED", 
            "ROGUE", "SCIENCE", "TECHNICAL", "WEAPON PROFICIENCIES", "WILDERNESS"],
        required: true
    },

    subCategory: String,
    basePercentage: Number,
    levelBonus: Number,

    requiredSkills: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }]

})

module.exports = mongoose.model('Skill', SkillSchema);