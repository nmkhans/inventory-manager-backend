const express = require('express');
const defaultController = require('../controller/defaultController');
const {
    registerUser,
    loginUser
} = require("../controller/userController");
const {
    createBrand, getBrandList
} = require('../controller/brandController');

const router = express.Router();

/* Application routes */

//? default route api
router.get("/", defaultController);

//todo: user api

//? register a user
router.post("/register-user", registerUser)

//? login a user
router.post("/login-user", loginUser)

//todo: brand api

//? create a brand
router.post("/create-brand", createBrand)

//? get all brand list
router.get("/get-brand-list", getBrandList)

module.exports = router;