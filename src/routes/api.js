const express = require('express');
const defaultController = require('../controller/defaultController');
const {
    registerUser
} = require("../controller/userController");

const router = express.Router();

/* Application routes */

//? default route api
router.get("/", defaultController);

//todo: user api

//? register a user
router.post("/register-user", registerUser)

module.exports = router;