import AuthService from "../services/authService.js";

class AuthController {

  /**
   * Register Employee
   */
  static async register(req, res, next) {

    try {

      const {
        employeeId,
        email,
        password,
      } = req.body;

      const data = await AuthService.register(
        employeeId,
        email,
        password
      );

      return res.status(201).json({
        success: true,
        message: "Registration successful",
        data,
      });

    } catch (error) {
      next(error);
    }

  }

  /**
   * Login Employee
   */
  static async login(req, res, next) {

    try {

      const {
        email,
        password,
      } = req.body;

      const data = await AuthService.login(
        email,
        password
      );

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default AuthController;