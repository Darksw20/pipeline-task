const { Router } = require("express");
const { router: usersRouter } = require("./users/users.router");

const router = Router();

router.use("/users", usersRouter);

module.exports = { router };
