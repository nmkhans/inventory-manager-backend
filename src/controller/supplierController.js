const Supplier = require("../models/supplierModel");

const createSupplier = async (req, res) => {
    try {
        const data = req.body;
        const exist = await Supplier.findOne({ email: data.email });

        if (!exist) {
            const result = await Supplier.create(data);
            res.status(201).json({
                success: true,
                message: "Supplier created.",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: "Supplier already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

const getSupplierList = async (req, res) => {
    try {
        const result = await Supplier.find();

        res.status(200).json({
            success: true,
            message: "All supplier data list",
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
    createSupplier,
    getSupplierList
}