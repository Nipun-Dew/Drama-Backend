const express = require('express');
const router = express.Router();

const User = require('../models/User');

// user signup (register)
router.post('/signup', async(req, res) => {
    try {
        const userEmail = req.body.email;
        const userPassword = req.body.password;

        if (!(userEmail && userPassword)) {
            return res.json({ "err": "All input is required!" });
        }

        const olduser = await User.findOne({ email: userEmail }).exec();

        if (olduser) {
            return res.json({ "err": "given email already exist!" });
        }

        const user = new User({
            email: userEmail,
            password: userPassword,
        });

        const result = await user.save();
        console.log(result);
        res.json(result);

    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// user signin (login)
router.get('/signin', async(req, res) => {
    try {
        const inputEmail = req.body.email;
        const inputPassword = req.body.password;

        if (!(inputEmail && inputPassword)) {
            return res.json({ "err": "All input is required!" });
        }

        const olduser = await User.findOne({ email: inputEmail }).exec();

        if (!olduser) {
            return res.json({ "err": "incorrect email or password!" });
        }

        if (!(inputPassword == olduser.password)) {
            return res.json({ "err": "incorrect email or password!" })
        }

        res.json(olduser);
        console.log(olduser);

    } catch (err) {
        res.json(err);
        console.log(err);
    }

});

module.exports = router;