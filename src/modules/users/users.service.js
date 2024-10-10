/** Handle logic and DB connnection */

const pool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  database: 'database_name',
  password: 'password',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

class UsersService {
  getHello() {
    return { message: "Hello" };
  }

  async createUser(username, password, email) {
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.query(query, [username, password, email]);
      const userId = result.insertId;
      return this.findUserById(userId);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    try {
      const [rows] = await pool.query(query, [username]);
      return rows[0];
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findUserById(userId) {
    const query = 'SELECT * FROM users WHERE id = ?';
    try {
      const [rows] = await pool.query(query, [userId]);
      return rows[0];
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new UsersService();
