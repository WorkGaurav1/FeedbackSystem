import {
  Trophy,
  TrendingUp,
  Scale,
  Handshake,
  Flag,
  Sprout,
  MessageCircle,
  Lightbulb,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

import api from "./api";

const iconMap = {
  Leadership: Trophy,
  Productivity: TrendingUp,
  "Work Quality": Scale,
  Teamwork: Handshake,
  Reliability: Flag,
  Adaptability: Sprout,
  Communication: MessageCircle,
  Innovation: Lightbulb,
  Accountability: ClipboardCheck,
  "Time Management": Clock3,
};

class DashboardService {

  /**
   * Fetch dashboard data
   */
  static async getDashboardData() {

    const response = await api.get("/dashboard");

    const dashboardData = response.data.data.map((attribute) => ({

      id: attribute.attribute_id,

      name: attribute.attribute_name,

      icon: iconMap[attribute.attribute_name],

      positive: attribute.positive,

      negative: attribute.negative,

      description: attribute.description,

      spectrum: attribute.spectrum,

    }));

    return {
      success: response.data.success,
      message: response.data.message,
      data: dashboardData,
    };

  }

}

export default DashboardService;