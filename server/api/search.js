const {Project} = require('../models/project');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

router.get('/projects', async (req, res) => {
    var arr = JSON.parse(req.query.array);
    const projects = await Project.find({ tags: { $in: arr } });
    
    if(!projects) return res.status(404)
    .send('The project with the given ID was not found.')

    res.send(projects);
});

router.get('/users', async (req, res) => {
    var arr = JSON.parse(req.query.array);
    const users = await User.find({ tags: { $in: arr } });
    
    if(!users) return res.status(404)
    .send('The project with the given ID was not found.')

    res.send(users);
});

module.exports = router;