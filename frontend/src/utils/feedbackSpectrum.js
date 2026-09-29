export function getFeedbackSpectrum(positive, negative) {
  const score = positive - negative;

  if (score >= 10) {
    return {
      label: "Excellent",
      color: "green",
    };
  }

  if (score >= 5) {
    return {
      label: "Good",
      color: "emerald",
    };
  }

  if (score >= -4) {
    return {
      label: "Balanced",
      color: "yellow",
    };
  }

  if (score >= -9) {
    return {
      label: "Needs Improvement",
      color: "orange",
    };
  }

  return {
    label: "Critical",
    color: "red",
  };
}