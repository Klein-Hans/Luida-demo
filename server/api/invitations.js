const {Invitation, validate} = require('../models/invitation');
const express = require('express');
const router = express.Router();

// get all user for debuging
router.get('/', async (req, res) => {
    const invitations = await Invitation.find();
    if (!invitations) return res.status(404)
    .send('The user with the given ID was not found.');
    res.send(invitations);
});

// View all invitation per user
// /invitations/:id -> userID
router.get('/:id', async (req, res) => {
    const invitations = await Invitation.find({user: req.params.id}).populate("user project")
    if (!invitations) {
        return res.status(404)
    .send('The user with the given ID was not found.');
    };
    res.send(invitations);
});

// send new offer
router.post('/', async (req, res) => {
    let invitation = new Invitation({
        user: req.body.user,
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

// delete invitation after accepting of denying offer
router.delete('/:id', async (req, res) => {
    const invitation = await Invitation.findOneAndDelete({_id: req.params.id})
    try{
        res.send(invitation);
    }
    catch(err){
        console.log(err.message)
    }
})



module.exports = router;