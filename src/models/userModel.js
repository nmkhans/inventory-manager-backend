const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}, {versionKey: false});

const User = mongoose.model("user", schema);
module.exports = User;