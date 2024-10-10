const { Router } = require("express");
const usersController = require("./users.controller");

const router = Router();

router.get("/hello", usersController.getHello);

module.exports = {
  router,
};
