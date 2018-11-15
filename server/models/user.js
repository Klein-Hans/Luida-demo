const Joi = require('joi');
const mongoose = require('mongoose');
const {projectSchema} = require('./project')

const userSchema = new mongoose.Schema({
    _id: {
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
        required: false
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
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Project"
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Question"
    }]
});

const User = mongoose.model('User', userSchema, 'users');

function validateUser(user){
    const schema = {
        id: Joi.string().required(),
        username: Joi.string().required(),
        disc: Joi.string(),
        url: Joi.string(),
        campus: Joi.string().required(),
        grade: Joi.string().required(),
        tags: Joi.array().required(),
        followers: Joi.array(),
        following: Joi.array(),
        projects: Joi.array(),
        questions: Joi.array()

    };
    return Joi.validate(user, schema);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;