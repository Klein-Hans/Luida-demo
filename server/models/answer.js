const Joi = require('joi');
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    respondent : {
        type: String,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    favorite: {
        type: Number,
        required: false
    }
});

const Answer = mongoose.model('Answer', answerSchema, 'answers');

function validateAnswer(answer){
    const schema = {
        respondent: Joi.string().required(),
        date: Joi.date().required(),
        content: Joi.string().required()
    };
    return Joi.validate(answer, schema);
}


exports.Answer = Answer;
exports.validate = validateAnswer;
exports.answerSchema = answerSchema;