import pool from "../config/database.js";

class UserModel {

  /**
   * Find user by Email
   */
  static async findByEmail(email) {

    const [rows] = await pool.execute(
      `
      SELECT
        user_id,
        employee_id,
        full_name,
        email,
        password_hash,
        department,
        designation,
        role,
        is_active,
        is_registered,
        created_at,
        updated_at
      FROM users
      WHERE email = ?
      LIMIT 1
      `,
      [email]
    );

    return rows[0] || null;
  }

  /**
   * Find user by Employee ID
   */
  static async findByEmployeeId(employeeId) {

    const [rows] = await pool.execute(
      `
      SELECT
        user_id,
        employee_id,
        full_name,
        email,
        password_hash,
        department,
        designation,
        role,
        is_active,
        is_registered,
        created_at,
        updated_at
      FROM users
      WHERE employee_id = ?
      LIMIT 1
      `,
      [employeeId]
    );

    return rows[0] || null;
  }

  /**
   * Find user by ID
   */
  static async findById(userId) {

    const [rows] = await pool.execute(
      `
      SELECT
        user_id,
        employee_id,
        full_name,
        email,
        department,
        designation,
        role,
        is_active,
        is_registered,
        created_at,
        updated_at
      FROM users
      WHERE user_id = ?
      LIMIT 1
      `,
      [userId]
    );

    return rows[0] || null;
  }

  /**
   * Complete employee registration
   */
  static async registerUser(userId, passwordHash) {

    const [result] = await pool.execute(
      `
      UPDATE users
      SET
        password_hash = ?,
        is_registered = TRUE
      WHERE user_id = ?
      `,
      [
        passwordHash,
        userId,
      ]
    );

    return result;
  }

  /**
   * Update profile
   */
  static async updateProfile(userId, profileData) {

    const {
      full_name,
      department,
      designation,
    } = profileData;

    const [result] = await pool.execute(
      `
      UPDATE users
      SET
        full_name = ?,
        department = ?,
        designation = ?
      WHERE user_id = ?
      `,
      [
        full_name,
        department,
        designation,
        userId,
      ]
    );

    return result;
  }

  /**
   * Change password
   */
  static async changePassword(userId, passwordHash) {

    const [result] = await pool.execute(
      `
      UPDATE users
      SET
        password_hash = ?
      WHERE user_id = ?
      `,
      [
        passwordHash,
        userId,
      ]
    );

    return result;
  }

}

export default UserModel;