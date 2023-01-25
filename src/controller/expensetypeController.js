const ExpenseType = require("../models/expensetypeModel");

const createExpenseType = async (req, res) => {
    try {
        const data = req.body;
        const result = await ExpenseType.create(data);

        res.status(200).json({
            success: true,
            message: "Expense type created.",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

module.exports = {
    createExpenseType
}