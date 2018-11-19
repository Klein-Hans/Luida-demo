const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    participants : [{
        type: String,
        ref: 'User'
    }]
});

const Conversation = mongoose.model('Conversation', conversationSchema, 'conversations');

exports.Conversation = Conversation;