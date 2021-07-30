const express = require('express');
const router = express.Router();

const Drama = require('../models/Drama');

// get all drama objects
router.get('/get/dramas', async(req, res) => {
    try {
        const data = await Drama.find({}).exec();
        console.log(data);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// get all comments for the given drama _id
router.get('/get/comments', async(req, res) => {
    try {
        const data = await Drama.find({ _id: req.body._id }).exec();
        console.log((data[0]).Comments);
        res.json((data[0]).Comments);
        console.log("hello");
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// add drama for db
// only admins can access this end point
router.post('/add/drama', async(req, res) => {
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

module.exports = router;