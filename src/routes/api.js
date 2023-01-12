const express = require('express');
const defaultController = require('../controller/defaultController');
const {
    registerUser,
    loginUser
} = require("../controller/userController");

const router = express.Router();

/* Application routes */

//? default route api
router.get("/", defaultController);

//todo: user api

//? register a user
router.post("/register-user", registerUser)

//? login a user
router.post("/login-user", loginUser)

module.exports = router;