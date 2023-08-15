const mongoose = require("mongoose")

const quizDB = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const quizD = mongoose.model("quizDB", quizDB);

module.exports = { quizD, quizDB };