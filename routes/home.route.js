const exprees = require("express");
const controller = require("../controller/home.controller");
const route = exprees.Router();

route.get("/", controller.index);

module.exports = route;
