const mongoose = require('mongoose');

const UserSchema = new mongoose({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [String],
    isadmin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;