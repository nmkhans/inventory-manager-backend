const Customer = require("../models/customerModel");

const createCustomer = async (req, res) => {
    try {
        const data = req.body;
        const exist = await Customer.findOne({ email: data.email });

        if (!exist) {
            const result = await Customer.create(data);
            res.status(201).json({
                success: true,
                message: "Customer created.",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: "Customer already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

const getCustomerList = async (req, res) => {
    try {
        const result = await Customer.find();

        res.status(200).json({
            success: true,
            message: "All customer data list",
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
    createCustomer,
    getCustomerList
}