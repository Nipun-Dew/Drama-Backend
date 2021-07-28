const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "message": "Hello" });
});

app.listen(3000, () => {
    console.log("Listen from port number 3000");
});