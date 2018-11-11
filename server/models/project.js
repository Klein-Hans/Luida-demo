const Joi = require('joi');
const mongoose = require('mongoose');
const {userSchema} = require('./user');

const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    disc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 300
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
        type: [userSchema],
        required: false
    }
});

const Project = mongoose.model('Project', projectSchema);

function validateProject(project){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(project, schema);
}

exports.projectSchema = projectSchema;
exports.Project = Project;
exports.validate = validateProject;