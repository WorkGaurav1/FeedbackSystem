import DashboardModel from "../models/DashboardModel.js";

class DashboardService {

  /**
   * Determine Feedback Spectrum
   */
  static calculateSpectrum(positive, negative) {

    const difference = positive - negative;

    if (difference >= 5) {
      return "Excellent";
    }

    if (difference >= 1) {
      return "Good";
    }

    if (difference === 0) {
      return "Balanced";
    }

    if (difference >= -4) {
      return "Needs Improvement";
    }

    return "Critical";

  }

  /**
   * Dashboard Data
   */
  static async getDashboardData() {

    const attributes = await DashboardModel.getDashboardData();

    const dashboard = attributes.map((attribute) => {

      const positive = Number(attribute.positive);
      const negative = Number(attribute.negative);
      const total = Number(attribute.total);

      return {

        attribute_id: attribute.attribute_id,

        attribute_name: attribute.attribute_name,

        description: attribute.description,

        icon_name: attribute.icon_name,

        positive,

        negative,

        total,

        spectrum: this.calculateSpectrum(
          positive,
          negative
        ),

      };

    });

    return dashboard;

  }

}

export default DashboardService;