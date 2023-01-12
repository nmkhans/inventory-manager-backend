const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//? register a new user
const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const userExist = await User.findOne(
            { email: data.email }
        );

        if (!userExist) {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            const userData = {
                ...data,
                password: hashedPassword
            };

            await User.create(userData);
            const user = await User.findOne(
                { email: data.email },
                { password: 0 }
            );

            res.status(200).json({
                success: true,
                message: "User registration successfull.",
                data: user
            })

        } else {
            res.status(500).json({
                success: false,
                message: "User already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "there was a server side error",
            data: error
        })
    }
}

//? login a user
const loginUser = async (req, res) => {

}

module.exports = {
    registerUser,
    loginUser
}