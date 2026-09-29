export function calculateSpectrum(positive, negative) {
  const diff = positive - negative;

  if (diff >= 5) return "Excellent";
  if (diff >= 1) return "Good";
  if (diff === 0) return "Balanced";
  if (diff >= -5) return "Needs Improvement";

  return "Critical";
}