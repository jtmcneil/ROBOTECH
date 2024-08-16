const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    displayName: {
        type: String,
        required: true,
    },

    campaigns: [{
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    }]

})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'}); // adds username and password fields

module.exports = mongoose.model('User', userSchema);
