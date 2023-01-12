const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    try {
        const data = req.body;
        const userExist = await User.findOne({
            email: data.email
        });

        if (userExist) {
            const isMatch = await bcrypt.compare(data.password, userExist.password);

            if (isMatch) {
                const user = await User.findOne(
                    { email: data.email },
                    { password: 0 }
                );

                const token = jwt.sign(
                    { email: user.email },
                    process.env.TOKEN_SECRET,
                    {expiresIn: "1h"}
                );

                res.status(200).json({
                    success: true,
                    message: "Login successfull.",
                    token: token,
                    data: user
                })

            } else {
                res.status(500).json({
                    success: false,
                    message: "Incorrect password!"
                })
            }

        } else {
            res.status(500).json({
                success: false,
                message: "No user found!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}