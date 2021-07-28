const mongoose = require('mongoose');

const DramaSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cast: [String],
    Director: {
        type: String,
        required: true
    },
    Producer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    Comments: [String]
});

const Drama = mongoose.model('Drama', DramaSchema);

module.exports = Drama;