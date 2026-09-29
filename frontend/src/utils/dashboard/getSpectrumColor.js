export function getSpectrumColor(status) {
  switch (status) {
    case "Excellent":
      return {
        cardBg: "bg-green-50",
        cardBorder: "border-green-200",
        iconBg: "bg-green-600",
        softBg: "bg-green-100",
        softText: "text-green-600",
        linkText: "text-green-600",
        arcColor: "#16a34a",
      };

    case "Good":
      return {
        cardBg: "bg-emerald-50",
        cardBorder: "border-emerald-200",
        iconBg: "bg-emerald-500",
        softBg: "bg-emerald-100",
        softText: "text-emerald-600",
        linkText: "text-emerald-600",
        arcColor: "#10b981",
      };

    case "Balanced":
      return {
        cardBg: "bg-yellow-50",
        cardBorder: "border-yellow-200",
        iconBg: "bg-yellow-500",
        softBg: "bg-yellow-100",
        softText: "text-yellow-600",
        linkText: "text-yellow-600",
        arcColor: "#eab308",
      };

    case "Needs Improvement":
      return {
        cardBg: "bg-orange-50",
        cardBorder: "border-orange-200",
        iconBg: "bg-orange-500",
        softBg: "bg-orange-100",
        softText: "text-orange-600",
        linkText: "text-orange-600",
        arcColor: "#f97316",
      };

    default:
      return {
        cardBg: "bg-red-50",
        cardBorder: "border-red-200",
        iconBg: "bg-red-500",
        softBg: "bg-red-100",
        softText: "text-red-600",
        linkText: "text-red-600",
        arcColor: "#ef4444",
      };
  }
}
