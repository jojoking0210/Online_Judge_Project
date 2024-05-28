const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    statement: String,
    name: String,
    code: String,
    difficulty: String
});

module.exports = mongoose.model('Problem', ProblemSchema);
