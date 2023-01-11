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
const uri = process.env.DATABASE_URI;
const databaseConfiguration = {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS
}

//? database connection
mongoose.set("strictQuery", true);
mongoose.connect(uri, databaseConfiguration)
    .then(() => {
        console.log("database connected")
    }).catch(error => {
        console.log(error)
    });

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