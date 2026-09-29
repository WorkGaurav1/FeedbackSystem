import { ChevronRight } from "lucide-react";

import { calculateSpectrum } from "@/utils/dashboard/calculateSpectrum";
import { getSpectrumColor } from "@/utils/dashboard/getSpectrumColor";

function AttributeCard({ attribute }) {
  const Icon = attribute.icon;

  const total = attribute.positive + attribute.negative;
  const positivePercent = total === 0 ? 50 : (attribute.positive / total) * 100;

  const status = calculateSpectrum(attribute.positive, attribute.negative);
  const colors = getSpectrumColor(status);

  return (
    <div
      className={`flex flex-col items-center rounded-2xl border ${colors.cardBg} ${colors.cardBorder} p-6 text-center shadow-sm`}
    >
      <div
        className={`flex size-14 items-center justify-center rounded-full ${colors.iconBg} text-white`}
      >
        <Icon size={26} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {attribute.name}
      </h3>

      <p className="mt-1 text-sm text-slate-500 line-clamp-2">
        {attribute.description}
      </p>

      <svg
        viewBox="0 0 200 50"
        preserveAspectRatio="none"
        className="mt-5 h-10 w-full"
      >
        <path
          d="M10 45 Q100 -10 190 45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="100"
        />
        <path
          d="M10 45 Q100 -10 190 45"
          fill="none"
          stroke={colors.arcColor}
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${positivePercent} 100`}
        />
      </svg>

      <div className="mt-3 grid w-full grid-cols-2">
        <div>
          <p className="text-2xl font-bold text-green-600">
            {attribute.positive}
          </p>
          <p className="text-sm text-slate-500">Positive</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-red-600">
            {attribute.negative}
          </p>
          <p className="text-sm text-slate-500">Negative</p>
        </div>
      </div>

      <button
        type="button"
        className={`mt-4 flex items-center gap-1 text-sm font-semibold ${colors.linkText}`}
      >
        View Feedback
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default AttributeCard;
