const {Conversation} = require('../models/conversation');
const express = require('express');
const router = express.Router();

// when subscribe a channel they can get this api but when they get into the project, it wouldn't get used
router.get('/:id', async (req, res) => {
    let messages = await Conversation.findById(req.params.id).populate('messages')
    if(!messages) return res.status(404).send('No message yet')
    res.send(messages)
});

// create new conversation when group get created
router.post('/:id', async (req, res) => {
    let message = new Conversation({
        _id: req.params.id
    });
    try{
        message = await message.save();
        res.send(message)
    }
    catch(err){
        console.log(err);
    }
});

// just send message to group chat meaning this api would get called by time sent a message
router.put('/:id', async (req, res) => {
    let message = await Conversation.findOneAndUpdate({_id: req.params.id}, {
        $push: { messages: req.body.message }
    });
    if(!message) res.status(400).send('no project in given id');
    res.send(message);
})

module.exports = router;