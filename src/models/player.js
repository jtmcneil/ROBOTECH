
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttributeSchema = new Schema({

    attribute: {
        type: String,
        enum: ['IQ', 'ME', 'MA', 'PS', 'PP', 'PE', 'PB', 'Spd'],
        required: true
    },

    value: { 
        type: Number,
        required: true
    }

}, {_id: false})

const SkillAbilitySchema = new Schema ({

    skill: {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: true
    },

    ability: {
        type: Number,
        min: 0,
        max: 98
    }

}, {_id: false});

const PlayerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    attributes: [AttributeSchema],
    
    race: {
        type: String,
        enum: ['Human', 'Zentraidi'],
        required: true
    },
    
    sex: {
        type: String,
        enum: ['Male', 'Female']
    },
    
    img: String,

    age: Number,
    weight: Number, //lbs
    height: Number, //inches
    origin: String,
    familyTies: String,
    birthOrder: String,
    disposition: String,
    alignment: String,

    hp:{
        type: Number,
        required: true
    },

    experience: {
        type: Number,
        required: true,
        default: 0
    },
    
    level: {
        type: Number,
        required: true,
        default: 1
    },
    
    occupation: {
        type: Schema.Types.ObjectId,
        ref: 'Occupation',
        required: true
    },
    
    occSkills: [{
        type: SkillAbilitySchema,
        required: true
    }],

    otherSkills: [{
        type: SkillAbilitySchema,
        required: true
    }]

})

module.exports = mongoose.model('Player', PlayerSchema);