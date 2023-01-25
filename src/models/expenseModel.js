const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        requied: true
    },
    note: {
        type: String,
        required: true
    }
}, {versionKey: false, timeStamps: true})

const Expense = mongoose.model("expense", schema);
module.exports = Expense;