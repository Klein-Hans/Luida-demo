const Joi = require('joi');
const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    project: {
        type: String,
        required: true
    }
});

const Invitation = mongoose.model('Invitation', invitationSchema, 'invitations');

function validateInvitation(invitation){
    const schema = {
        id: Joi.string().required(),
        project: Joi.string().required(),
        date: Joi.date().required()
    };
    return Joi.validate(invitation, schema);
}

exports.invitationSchema = invitationSchema;
exports.Invitation = Invitation;
exports.validate = validateInvitation;