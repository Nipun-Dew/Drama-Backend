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
    cast: {
        type: Buffer,
        required: true
    },
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
    Comments: {
        type: Buffer,
        required: true
    }
})