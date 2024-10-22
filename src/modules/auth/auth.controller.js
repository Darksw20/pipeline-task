const authService = require("./auth.service");

class AuthController {
  /**
   *  Logs in the user using the body request
   * @param {*} req
   * @param {*} res
   */
  async login(req, res) {
    const { email, password } = req.body;
    const session = await authService.login(email, password);
    const { session_token } = session[0];
    res.cookie("session_token", session_token, { httpOnly: true });
    res.json({
      success: true,
    });
  }

  /**
   * Registers a new user
   * @param {*} req
   * @param {*} res
   */
  async register(req, res) {
    const { name, email, password } = req.body;
    const userCreated = await authService.register(name, email, password);
    res.json(userCreated);
  }

  /**
   * Authenticates the request
   * @param {*} req
   * @param {*} res
   */
  async authenticate(req, res) {
    const { amount, currency, crypto } = req.body;
    const session_token = req.cookies.session_token;
    const isValid = await authService.authenticate(session_token);
    if (!isValid) {
      res.cookie.clear("session_token");
      res.status(401).json({
        success: false,
        message: "Invalid session",
      });
    } else {
      const response = await fetch("http://52.90.240.234:8080/convert", {
        method: "POST",
        body: JSON.stringify({ amount, currency, crypto }),
      });
      res.json({
        response,
      });
    }
  }
}

module.exports = new AuthController();
