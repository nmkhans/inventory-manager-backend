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
}, {versionKey: false, timeStamps: true})

const ExpenseType = mongoose.model("expensetype", schema);
module.exports = ExpenseType