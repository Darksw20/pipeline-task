/** Handle logic and DB connnection */

class UsersService {
  getHello() {
    return { message: "Hello" };
  }
}

module.exports = new UsersService();
