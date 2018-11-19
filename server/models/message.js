const mongoose = require('mongoose');
const Joi = require('joi');

const messageSchema = new mongoose.Schema({
    conversationId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: "User"
    }
}, { timestamps: true});

function validateMessage(message){
    const schema = {
        conversationId: Joi.string().required(),
        username: Joi.string().required(),
        disc: Joi.string(),
        url: Joi.string(),
        campus: Joi.string().required(),
        grade: Joi.string().required(),
        tags: Joi.array().required()
    };
    return Joi.validate(user, schema);
}

const Message = mongoose.model('Message', messageSchema, 'messages');

exports.Message = Message;