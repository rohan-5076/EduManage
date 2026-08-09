const express = require("express");
const route = express.Router();

const {add} = require("../controllers/TestingController");

route.post("/" , add);

module.exports = route;