const {Invitation, validate} = require('../models/invitation');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

// get all user for debuging
router.get('/', async (req, res) => {
    const invitations = await Invitation.find();
    if (!invitations) return res.status(404)
    .send('The user with the given ID was not found.');
    res.send(invitations);
});

// View all invitation per user
// /invitations/:id
router.get('/:id', async (req, res) => {
    const invitations = await Invitation.findById(req.params.id)
    if (!invitations) {
        return res.status(404)
    .send('The user with the given ID was not found.');
    };
    res.send(invitations);
});

router.post('/', async (req, res) => {
    let invitation = new Invitation({
        _id: req.body.id,
        project: req.body.project,
        date: req.body.date
    });
    try{
        invitation = await invitation.save();
        res.send(invitation);
    }
    catch(err){
        console.log(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    const invitation = await Invitation.findByIdAndRemove(req.params.id)
    try{
        res.send(invitation);
    }
    catch(err){
        console.log(err.message)
    }
})



module.exports = router;