
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgaignSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    description: String,

    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }]

});

module.exports = mongoose.model('Campaign', CampgaignSchema);
