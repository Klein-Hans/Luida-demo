const Joi = require('joi');
const mongoose = require('mongoose');
const {userSchema} = require('./user');

const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    disc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    tags : {
        type: [String],
        required: true
    },
    users: [{
        type: String,
        required: false,
        ref: "User"
    }],
    admin: {
        type: String,
        required: true,
        ref: "User"
    }
});

const Project = mongoose.model('Project', projectSchema, 'projects');

function validateProject(project){
    const schema = {
        name: Joi.string().required(),
        disc: Joi.string().required(),
        url: Joi.string().required(),
        tags: Joi.array().required(),
        admin: Joi.string().required()
    };
    return Joi.validate(project, schema);
}

exports.projectSchema = projectSchema;
exports.Project = Project;
exports.validate = validateProject;