const express = require('express');
const defaultController = require('../controller/defaultController');

const router = express.Router();

/* Application routes */

//? default route api
router.get("/", defaultController);

module.exports = router;