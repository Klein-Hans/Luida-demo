const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

// get all user for debuging
router.get('/', async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(404)
    .send('The user with the given ID was not found.');
    res.send(users);
});

// View User detaile
router.get('/:id', async (req, res) => {
    const users = await User.findById(req.params.id).populate('projects questions')
    if (!users) {
        return res.status(404)
    .send('The user with the given ID was not found.');
    };
    res.send(users);
});

// Add new user
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    ;
    if(error) return res.status(400).send(error.details[0].message);

    let user = new User({
        _id: req.body.id,
        username: req.body.username,
        disc: req.body.disc,
        url: req.body.url,
        campus: req.body.campus,
        grade: req.body.grade,
        tags: req.body.tags
    });
    try{
        user = await user.save();
        res.send(user);
    }
    catch(err){
        console.log(err.message);
    }
});


// User Profile Edit
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        disc: req.body.disc,
        url: req.body.url,
        campus: req.body.campus,
        grade: req.body.grade,
        tags: req.body.tags,
        projects: req.body.projects,
        quesitons: req.body.quesitons
    })

    if(!user) return res.status(404).send('The user with given ID was not found');
    res.send(user);
})

module.exports = router;