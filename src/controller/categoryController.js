const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const exist = await Category.findOne({ name: data.name });

        if (!exist) {
            const result = await Category.create(data);
            res.status(201).json({
                success: true,
                message: "Category created.",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: "Category already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

const getCategoryList = async (req, res) => {
    try {
        const result = await Category.find();

        res.status(200).json({
            success: true,
            message: "All Category data list",
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
    createCategory,
    getCategoryList
}