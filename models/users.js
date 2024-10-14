// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    idea: String,
    confession: String,
    projectTitle: String,
    projectDescription: String,
    datingInterests: String,
    idealPartner: String,
    feedback: String,
    chatMessages: [
        {
            user: String,
            message: String,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
