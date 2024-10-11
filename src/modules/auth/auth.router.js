const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/authenticate", authController.authenticate);

module.exports = { router };
