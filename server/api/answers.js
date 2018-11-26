const {Answer, validate} = require('../models/answer');
const express = require('express');
const router = express.Router();

// Add new question
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let answer = new Answer({
        respondent: req.body.respondent,
        date: req.body.date,
        content: req.body.content,
        favorite: 0
    });
    try{
        answer = await answer.save();
        res.send(answer);
    }
    catch(err){
        console.log(err.message);
    }
});

module.exports = router;