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
    const { session_token } = req.body;
    const isValid = await authService.authenticate(session_token);
    if (!isValid) {
      res.cookie.clear("session_token");
      res.status(401).json({
        success: false,
        message: "Invalid session",
      });
    } else {
      res.json({
        authenticated: isValid,
      });
    }
  }
}

module.exports = new AuthController();
