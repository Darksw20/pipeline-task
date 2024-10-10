/** Handle http requests */

const usersService = require("./users.service");

class UsersController {
  getHello(req, res) {
    const hello = usersService.getHello();
    res.json(hello);
  }
}

module.exports = new UsersController();
