const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Project"
    },
    messages: [{
        body: {
            type: String
        },
        username: {
            type: String
        },
        url: {
            type: String
        },
        date: {
            type: Date
        },
        userid: {
            type: String
        }
    }]
});

const Conversation = mongoose.model('Conversation', conversationSchema, 'conversations');

exports.Conversation = Conversation;