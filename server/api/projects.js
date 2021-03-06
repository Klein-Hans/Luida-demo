const {Project, validate} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

// get a project detaile
router.get('/:id', async (req, res) => {
    const projects = await Project.findById(req.params.id).populate('users admin');
    if(!projects) return res.status(404)
    .send('The project with the given ID was not found.')
    res.send(projects);
});

// get all user for debuging
router.get('/', async (req, res) => {
    const projects = await Project.find();
    
    if(!projects) return res.status(404)
    .send('The project with the given ID was not found.')

    res.send(projects);
});

// add new projects
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    ;
    if(error) return res.status(400).send(error.details[0].message);

    let project = new Project({
        name: req.body.name,
        disc: req.body.disc,
        url: req.body.url,
        tags: req.body.tags,
        admin: req.body.admin
    });
    try{
        project = await project.save();
        res.send(project);
    }
    catch(err){
        console.log(err.message);
    }
});

// add new user
router.put('/:id', async(req, res) => {
    const project = await Project.findOneAndUpdate({_id: req.params.id}, {
        $push: {
            users: req.body.user
        }
    });

    if(!project) return res.status(404).send('The project with given ID was not found');
    res.send(project);
})


module.exports = router;