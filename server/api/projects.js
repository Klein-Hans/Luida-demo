const {Project, validate} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

router.get('/:id', async (req, res) => {
    const projects = await Project.findById(req.params.id);
    if(!projects) return res.status(404)
    .send('The project with the given ID was not found.')

    res.send(projects);
});

router.get('/', async (req, res) => {
    const projects = await Project.find();
    
    if(!projects) return res.status(404)
    .send('The project with the given ID was not found.')

    res.send(projects);
});

module.exports = router;