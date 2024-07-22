
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequirementsSchema = new Schema({
    attribute: {
        type: String,
        enum: ['IQ', 'ME', 'MA', 'PS', 'PP', 'PE', 'PB', 'Spd']
    },
    value: Number,
    race: {
        type: String,
        enum: ['Human', 'Zentraidi']
    }
}, {_id: false});

const SkillBuffSchema = new Schema({
    skill: {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: true
    },
    buff: Number,
    cost: Number
}, {_id: false});

const ChoiceSkillSchema = new Schema({
    count: {
        type: Number,
        required: true
    },
    choices: [{
        type: SkillBuffSchema,
        required: true
    }]
}, {_id: false})

const OtherSkillReqSchema = new Schema({
    category:{
        type: String,
        enum: ["BME", "COMMUNICATIONS", "DOMESTIC", "ELECTRICAL", "ESPIONAGE/MILITARY", 
            "FIELD SCIENTIST", "MECHANICAL", "MEDICAL", "PHYSICAL", "PILOT", "PILOT RELATED", 
            "ROGUE", "SCIENCE", "TECHNICAL", "WEAPON PROFICIENCIES", "WILDERNESS"],
        required: true,
    },
    count: {
        type: Number,
        required: true
    }
}, {_id: false})

const OccupationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    requirements: [{
        type: RequirementsSchema,
        required: true
    }],
    levelXp: [{
        type: Number,
        required: true
    }],
    reqOccSkills: [{
        type: SkillBuffSchema,
        required: true
    }],
    choiceOccSkills: [ChoiceSkillSchema],
    otherSkills: {
        type: ChoiceSkillSchema,
        required: true
    },
    otherSkillReq: [OtherSkillReqSchema]

});

module.exports = mongoose.model('Occupation', OccupationSchema);