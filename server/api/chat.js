const {Conversation} = require('../models/conversation');
const {Message} = require('../models/message');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
mongoose.connect('mongodb://localhost/luidatest')
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));

// get all chat by user id which is used to check if the user included into the project
router.get('/', async (req, res) => {
    const conversations = await Conversation.find({ participants: req.params.id }).select('_id')
    if (!conversations) return res.status(404)
    .send('The user with the given ID was not found.');
    
    // Set up empty array to hold conversations + most recent message
    let fullConversations = [];
    conversations.forEach(async conversation => {
        const message = await Message.find({conversationId: conversation._id})
        .sort('-createdAt')
        .limit(1)
        .populate({
            path: "author",
            select: "username"
        })
        if(!messages) return res.status(404)
        .send('No message')
        fullConversations.push(message);
        if(fullConversations.length === conversations.length){
            return res.status(200).json({conversations: fullConversations})
        }
    });
});

router.get('/:id', async (req, res) => {
    const messages = await Message.find({conversationId: req.params.id}).select('createdAt body author')
    .sort('-createdAt')
    .populate('author')
    if(!messages) return res.status(404).send('No message yet')
    res.send(messages)
});

router.post('/new/:recipient', async (req, res) => {
    let conversation = new Conversation({
        participants: [req.body.id, req.params.recipient]
    });
    try{
        conversation = await conversation.save();
        let message = new Message({
            conversationId: conversation._id,
            body: req.body.composeMessage,
            author: req.body.id
        });
        message = await message.save()
        res.send(message);
    }
    catch(err){
        console.log(err.message);
    }
});

router.post('/:id', async (req, res) => {
    let reply = new Message({
        conversationId: req.params.id,
        body: req.body.composeMessage,
        author: req.body.id
    });
    try{
        reply = await reply.save();
        res.status(200).json({message: 'Reply successfully sent! '});
    }
    catch(err){
        console.log('reply err');
    }
});

module.exports = router;