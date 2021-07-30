const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

// database connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database is connected!");
});

// json body parser
app.use(express.json());

// testing endpoint
app.get('/', (req, res) => {
    res.json({ "message": "Hello" });
});

// add routes
app.use('/drama', require('./routes/dramaRoutes'));
app.use('/user', require('./routes/userRoutes'));

app.listen(3000, () => {
    console.log("Listen from port number 3000");
});