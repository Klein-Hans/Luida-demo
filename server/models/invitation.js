const Joi = require('joi');
const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: "User"
    },
    date : {
        type: Date,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Project"
    }
});

const Invitation = mongoose.model('Invitation', invitationSchema, 'invitations');

function validateInvitation(invitation){
    const schema = {
        id: Joi.string().required(),
        date: Joi.date().required(),
        project: Joi.required()
    };
    return Joi.validate(invitation, schema);
}

exports.invitationSchema = invitationSchema;
exports.Invitation = Invitation;
exports.validate = validateInvitation;