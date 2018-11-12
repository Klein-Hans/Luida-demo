const Joi = require('joi');
const mongoose = require('mongoose');

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
    users: {
        type: [String],
        required: false
    }
});

const Project = mongoose.model('Project', projectSchema);

function validateProject(project){
    const schema = {
        name: Joi.string().required(),
        disc: Joi.string().required(),
        url: Joi.string().required(),
        tags: Joi.array().required(),
        users: Joi.array().required()
    };
    return Joi.validate(project, schema);
}

exports.projectSchema = projectSchema;
exports.Project = Project;
exports.validate = validateProject;