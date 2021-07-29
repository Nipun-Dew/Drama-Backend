const express = require('express');
const app = express();

const Drama = require('./models/Drama');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database is connected!");
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "message": "Hello" });
});

app.get('/get/dramas', async(req, res) => {
    try {
        const data = await Drama.find({}).exec();
        console.log(data);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

app.get('/get/comments', async(req, res) => {
    try {
        const data = await Drama.find({ _id: req.body._id }).exec();
        console.log((data[0]).Comments);
        res.json((data[0]).Comments);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

app.post('/add/drama', async(req, res) => {
    const drama = new Drama({
        category: req.body.category,
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        cast: req.body.cast,
        Director: req.body.Director,
        Producer: req.body.Producer,
        genre: req.body.genre,
        Comments: req.body.Comments,
    });

    try {
        const result = await drama.save();
        console.log(result);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

app.listen(3000, () => {
    console.log("Listen from port number 3000");
});