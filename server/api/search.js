const {Project} = require('../models/project');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/projects', async (req, res) => {
    var arr = req.query.array;
    const projects = await Project.find({ tags: { $in: arr } });
    
    if(!projects) return res
    .send('The project with the given ID was not found.')

    res.send(projects);
});

router.get('/users', async (req, res) => {
    var arr = req.query.array;
    const users = await User.find({ tags: { $in: arr } });
    
    if(!users) return res
    .send('The project with the given ID was not found.')

    res.send(users);
});

// search users by user info
router.get('/users/byinfo', async (req, res) => {
    var grade = req.query.grade;
    var campus = req.query.campus;
    const users = await User.find({ $and: [{ grade: grade }, { campus: campus } ]});
    
    if(!users) return res
    .send('The project with the given ID was not found.')

    res.send(users);
});

module.exports = router;