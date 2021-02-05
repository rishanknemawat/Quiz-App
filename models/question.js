const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    optionA : String,
    optionB : String,
    optionC : String,
    optionD : String,
    answer: String,
});

module.exports = mongoose.model('Question', questionSchema);