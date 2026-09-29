import DashboardService from "../services/dashboardService.js";

class DashboardController {

  /**
   * Get Dashboard Data
   */
  static async getDashboard(req, res, next) {

    try {

      const data = await DashboardService.getDashboardData();

      return res.status(200).json({
        success: true,
        message: "Dashboard data fetched successfully",
        data,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default DashboardController;