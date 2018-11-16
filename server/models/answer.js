const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    respondent : {
        type: String,
        required: true
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

exports.answerSchema = answerSchema;