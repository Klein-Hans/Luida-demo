const {Question, validate} = require('../models/question');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

router.get('/', async (req, res) => {
    var arr =  req.query.array;
    const questions = await Question.find({ tags: { $in: arr}
    });
    if (!questions) return res.status(404)
    .send('The quesiton with the given ID was not found.');
    res.send(questions);
});

// View Question detaile
router.get('/:id', async (req, res) => {
    const quesiton = await Question.findById(req.params.id).populate([{
        path: "poster"}, {path: "answer", populate: {path: "respondent"}}])
    if (!quesiton) {
        return res.status(404)
    .send('The user with the given ID was not found.');
    };
    res.send(quesiton);
});

// Add new question
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    ;
    if(error) return res.status(400).send(error.details[0].message);

    let question = new Question({
        poster: req.body.poster, 
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        favorite: 0
    });
    try{
        question = await question.save();
        res.send(question);
    }
    catch(err){
        console.log(err.message);
    }
});


// Question Edit and post answer
router.put('/:id', async (req, res) => {
    const quesiton = await Question.findOneAndUpdate({_id: req.params.id}, {
        $push: { answer: req.body.answer }
    })

    if(!quesiton) return res.status(404).send('The question with given ID was not found');
    res.send(quesiton);
})

module.exports = router;