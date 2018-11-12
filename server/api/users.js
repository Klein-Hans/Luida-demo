const {User, validate} = require('../models/user');
const {Project} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

router.get('/', async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(404)
    .send('The user with the given ID was not found.');
    res.send(users);
});

router.get('/:userid', async (req, res) => {
    const projects = await Project.find({users: { _id: req.params.userid } })
    const users = await User.findById(req.params.userid);
    if (!users) {
        return res.status(404)
    .send('The user with the given ID was not found.');
    };
    users.projects = projects;
    res.send(users);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    ;
    if(error) return res.status(400).send(error.details[0].message);

    let user = new User({
        name: req.body.name,
        username: req.body.username,
        disc: req.body.disc,
        url: req.body.url,
        campus: req.body.campus,
        grade: req.body.grade,
        tags: req.body.tags,
        follwers: [],
        follwing: [],
        projects: []
    });
    try{
        user = await user.save();
        res.send(user);
    }
    catch(err){
        console.log(err.message);
    }
});

module.exports = router;