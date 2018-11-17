const Joi = require('joi');
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    poster : {
        type: String,
        required: true,
        ref: "User"
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
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Answer'
    }],
    favorite: {
        type: Number,
        required: false
    }
});

const Question = mongoose.model('Question', questionSchema, 'questions');

function validateQuestion(question){
    const schema = {
        poster: Joi.string().required(),
        date: Joi.date().required(),
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().required(),
        favorite: Joi.number()

    };
    return Joi.validate(question, schema);
}

exports.questionSchema = questionSchema;
exports.Question = Question;
exports.validate = validateQuestion;