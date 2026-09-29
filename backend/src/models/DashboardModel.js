import pool from "../config/database.js";

class DashboardModel {

  /**
   * Get dashboard statistics for all attributes
   */
  static async getDashboardData() {

    const [rows] = await pool.execute(
      `
      SELECT
          a.attribute_id,
          a.attribute_name,
          a.description,
          a.icon_name,

          COUNT(
              CASE
                  WHEN f.feedback_type = 'Positive'
                  THEN 1
              END
          ) AS positive,

          COUNT(
              CASE
                  WHEN f.feedback_type = 'Negative'
                  THEN 1
              END
          ) AS negative,

          COUNT(f.feedback_id) AS total

      FROM attributes a

      LEFT JOIN feedback f
      ON a.attribute_id = f.attribute_id

      GROUP BY
          a.attribute_id,
          a.attribute_name,
          a.description,
          a.icon_name

      ORDER BY
          a.display_order
      `
    );

    return rows;
  }

}

export default DashboardModel;