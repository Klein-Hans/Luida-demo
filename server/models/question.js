const Joi = require('joi');
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    poster : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    answer: [{
        type: Object,
        required: false,
        ref: "Answer"
    }]
});

const Question = mongoose.model('Question', questionSchema, 'posts');

function validateQuestion(question){
    const schema = {
        poster: Joi.string().required(),
        date: Joi.date().required(),
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().required(),
        answer: Joi.array()

    };
    return Joi.validate(question, schema);
}

exports.questionSchema = questionSchema;
exports.Question = Question;
exports.validate = validateQuestion;