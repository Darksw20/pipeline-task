/** Handle logic and DB connnection */
const database = require("../../config/database");

class UsersService {
  /**
   * Creates a new user
   * @param {*} username
   * @param {*} password
   * @param {*} email
   * @returns The user created
   */
  async createUser(username, password, email) {
    const query =
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    try {
      const [result, fields] = await database.query(query, [
        username,
        password,
        email,
      ]);
      return {
        created: result.insertId,
      };
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Finds a unique user by querying based on the unique fields and values
   * @param  {...any} fieldValues Objects in the form of {name: 'field', value: 'value'}
   * @returns The found user
   */
  async findWhereUnique(...fieldValues) {
    let fieldValuesQuery = fieldValues.map(({ name, value }, idx) => {
      return `${idx > 0 ? "AND" : ""} ${name}='${value}'`;
    });
    let sql = `SELECT id, username, password, email FROM users WHERE ${fieldValuesQuery.join(
      " "
    )} LIMIT 1`;

    const [result, fields] = await database.query(sql);
    return result[0];
  }
}

module.exports = new UsersService();
