// backend/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to save ideas
router.post('/ideas', async (req, res) => {
    try {
        const userIdea = new User({ idea: req.body.idea });
        await userIdea.save();
        res.status(201).send('Idea saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving idea');
    }
});

// Route to save confessions
router.post('/confessions', async (req, res) => {
    try {
        const userConfession = new User({ confession: req.body.confession });
        await userConfession.save();
        res.status(201).send('Confession saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving confession');
    }
});

// Route to save project partner info
router.post('/project-partner', async (req, res) => {
    try {
        const projectPartner = new User({
            projectTitle: req.body.projectTitle,
            projectDescription: req.body.projectDescription
        });
        await projectPartner.save();
        res.status(201).send('Project Partner request saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving project partner request');
    }
});

// Route to save dating info
router.post('/dating', async (req, res) => {
    try {
        const datingInfo = new User({
            datingInterests: req.body.interests,
            idealPartner: req.body.idealPartner
        });
        await datingInfo.save();
        res.status(201).send('Dating information saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving dating information');
    }
});

// Route to save feedback
router.post('/feedback', async (req, res) => {
    try {
        const feedback = new User({ feedback: req.body.feedback });
        await feedback.save();
        res.status(201).send('Feedback saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving feedback');
    }
});

// Route to save chat messages
router.post('/chat', async (req, res) => {
    try {
        const { user, message } = req.body;
        const userChat = await User.findById(req.body.userId);
        userChat.chatMessages.push({ user, message });
        await userChat.save();
        res.status(201).send('Message sent successfully!');
    } catch (error) {
        res.status(400).send('Error sending message');
    }
});

module.exports = router;
