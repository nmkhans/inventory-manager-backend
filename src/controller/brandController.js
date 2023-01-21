const Brand = require("../models/brandModel");

const createBrand = async (req, res) => {
    try {
        const data = req.body;
        const exist = await Brand.findOne({ name: data.name });

        if (!exist) {
            const result = await Brand.create(data);
            res.status(201).json({
                success: true,
                message: "Brand created.",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: "Brand already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

const getBrandList = async (req, res) => {
    try {
        const result = await Brand.find();

        res.status(200).json({
            success: true,
            message: "All brand data list",
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
    createBrand,
    getBrandList
}