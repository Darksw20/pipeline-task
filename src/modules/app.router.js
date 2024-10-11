const { Router } = require("express");
const { router: authRouter } = require("./auth/auth.router");

const router = Router();

router.use("/auth", authRouter);

module.exports = { router };
