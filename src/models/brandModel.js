const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }

}, { versionKey: false, timestamps: true });

const Brand = mongoose.model("brand", schema);
module.exports = Brand;