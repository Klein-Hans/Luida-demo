const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    disc: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    },
    tags : {
        type: [String],
        required: true
    },
    followers : {
        type: [String],
        required: false
    },
    following : {
        type: [String],
        required: false
    },
    projects: {
        type: [String],
        required: false
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = {
        _id: Joi.string().required(),
        name: Joi.string().required(),
        username: Joi.string().required(),
        disc: Joi.string().required(),
        url: Joi.string().required(),
        campus: Joi.string().required(),
        grade: Joi.string().required(),
        tags: Joi.array().required(),
        followers: Joi.array(),
        following: Joi.array(),
        projects: Joi.array()

    };
    return Joi.validate(user, schema);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;