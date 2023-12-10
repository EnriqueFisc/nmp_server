const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

// CREATING USER SCHEMA
const usersSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name is required' ],
    },
    lastname: {
        type: String,
        required: [ true, 'Lastname is required' ],
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'Email is required' ],
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ],
    }
});

// REMOVING PASSWORD FROM SCHEMA WHEN GET USER DATA
usersSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    const { password, ...rest } = userObject
    return rest;
}

// VALIDATION PLUGIN
usersSchema.plugin(uniqueValidator, { message: '{PATH} Email already exists' });

module.exports = mongoose.model('users', usersSchema);