const database = require("../../config/database");
const usersService = require("../users/users.service");

class AuthService {
  /**
   * Logins the user and creates a new session
   * @param {*} email Email of the user
   * @param {*} password  Password of the user in plain text
   * @returns The user found or null
   */
  async login(email, password) {
    const user = await usersService.findWhereUnique(
      {
        name: "email",
        value: email,
      },
      {
        name: "password",
        value: password,
      }
    );
    if (!user) return null;
    const sql = `INSERT INTO sessions(user_id, session_token, expires_at) VALUES (?, ?, FROM_UNIXTIME(?))`;
    const values = [
      user.id,
      crypto.randomUUID(),
      Math.floor((Date.now() + 3600) / 1000),
    ];
    const [result] = await database.query(sql, values);
    const toGet = await database.query(
      "SELECT * FROM sessions WHERE id = ? LIMIT 1",
      [result.insertId]
    );
    return toGet[0];
  }

  /**
   * Registers a new user in the database
   * @param {*} name The name of the user
   * @param {*} email  The email of the user
   * @param {*} password  The password of the user
   * @returns The user created information
   */
  async register(name, email, password) {
    const userCreated = await usersService.createUser(name, password, email);
    return userCreated;
  }

  /**
   * Checks if current session is valid
   * @param {*} session_token
   * @returns
   */
  async authenticate(session_token) {
    const sql = "SELECT * FROM sessions WHERE ?";
    const session = await database.query(sql, [session_token]);
    if (!session) return false;
    if (session.expires_at < Date.now()) {
      const deleteSql = "DELETE FROM sessions WHERE ?";
      await database.query(deleteSql, [session_token]);
      return false;
    }
    return true;
  }
}

module.exports = new AuthService();
