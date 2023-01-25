const Expense = require("../models/expenseModel");

const createExpense = async (req, res) => {
    try {
        const data = req.body;
        const result = await Expense.create(data);

        res.status(201).json({
            success: true,
            message: "Expense created.",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

const getExpenseList = async (req, res) => {
    try {
        const { search } = req.query;
        const searchRegx = {
            $regex: search,
            $options: "i"
        }

        const result = await Expense.aggregate([
            {
                $match: {
                    $or: [
                        { name: searchRegx },
                        { note: searchRegx }
                    ]
                }
            },
            {
                $lookup: {
                    from: "expensetypes",
                    localField: "typeId",
                    foreignField: "_id",
                    as: "type"
                }
            }
        ])

        res.status(200).json({
            success: true,
            message: "Expense list",
            data: result
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

module.exports = {
    createExpense,
    getExpenseList
}