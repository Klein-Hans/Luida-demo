const Joi = require('joi');
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    }
});

const Tag = mongoose.model('Tag', tagSchema);

function validateTag(tag){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(tag, schema);
}

exports.tagSchema = tagSchema;
exports.Tag = Tag;
exports.validate = validateTag;