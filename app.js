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

app.get('/get/dramas', (req, res) => {
    Drama.find({})
        .exec()
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post('/add/drama', (req, res) => {
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

    drama.save()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

app.listen(3000, () => {
    console.log("Listen from port number 3000");
});