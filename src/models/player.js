
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    attributes: [
        {
            attribute: {
                type: String,
                enum: ['IQ', 'ME', 'MA', 'PS', 'PP', 'PE', 'PB', 'Spd'],
                required: true
            },
            value: Number
        }
    ],
    
    race: {
        type: String,
        enum: ['human', 'zentraidi'],
        required: true
    },
    
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    
    age: Number,
    weight: Number,
    height: Number,
    origin: String,
    familyTies: String,
    birthOrder: String,
    disposition: String,
    alignment: String,

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
        type: String,
        required: true
    },
    
    occSkills: [String],
    otherSkills: [String],
    

    /*
    name: string
    attributes: [{
        name: enum [IQ, ME, MA, PS, PP, PE, PB, Spd]
        value: int }]
    race: enum [human, zentraedi]
    sex: string
    age: int
    weight: int
    height: int
    origin: string
    familyTies: string
    birthOrder: string
    disposition: string
    alignment: string
    experience: int
    level: int
    occupation: Occupation
    occSkills: [{
        skill: Skill 
        percentage: int }]
    otherSkills: [{
        skill: Skill 
        percentage: int }]
    */
    

})