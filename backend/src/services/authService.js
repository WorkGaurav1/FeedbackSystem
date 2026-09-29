import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/UserModel.js";

class AuthService {

  /**
   * Register Employee
   */
  static async register(employeeId, email, password) {

    // Find employee by Employee ID
    const user = await UserModel.findByEmployeeId(employeeId);

    if (!user) {
      throw new Error("Employee ID does not exist");
    }

    // Verify company email
    if (user.email !== email) {
      throw new Error("Employee ID and Email do not match");
    }

    // Check registration status
    if (user.is_registered) {
      throw new Error("Employee is already registered");
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Complete registration
    await UserModel.registerUser(
      user.user_id,
      passwordHash
    );

    return {
      message: "Registration successful",
    };
  }

  /**
   * Login Employee
   */
  static async login(email, password) {

    // Find user
    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Account active?
    if (!user.is_active) {
      throw new Error("Your account has been deactivated");
    }

    // Registered?
    if (!user.is_registered) {
      throw new Error("Please register your account first");
    }

    // Compare password
    const passwordMatched = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatched) {
      throw new Error("Invalid email or password");
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user.user_id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    // Remove password before sending response
    delete user.password_hash;

    return {
      token,
      user,
    };
  }

}

export default AuthService;