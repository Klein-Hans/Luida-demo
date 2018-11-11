const Joi = require('joi');
const mongoose = require('mongoose');
const {projectSchema} = require('./project');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    username : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    url: {
        type: String,
        required: false
    },
    disc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 300
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
        type: [projectSchema],
        required: false
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(user, schema);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;