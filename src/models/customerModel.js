const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {
        type: String,
        requred: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

}, { versionKey: false, timeStamps: true });

const Customer = mongoose.model("customer", schema);
module.exports = Customer