const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    category: String,
});

module.exports = mongoose.model('Test', testSchema);