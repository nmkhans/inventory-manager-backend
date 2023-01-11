const express = require("express");
require("dotenv").config();
const router = require("./src/routes/api");
const cors = require("cors");
const mongoose = require("mongoose");

//? app configuration
const app = express();
app.use(cors());
app.use(express.json());

//? database configuration

//? handle routes
app.use("/api/v1", router);

//? handle undefine routes
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "route was not found!"
    })
})

module.exports = app;