import { feedbackSpectrum } from "@/constants/feedbackSpectrum";
import { getSpectrumColor } from "@/utils/dashboard/getSpectrumColor";

function SpectrumGuide() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-slate-400 uppercase">
        Feedback Spectrum Guide
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {feedbackSpectrum.map((item) => {
          const Icon = item.icon;
          const colors = getSpectrumColor(item.level);

          return (
            <div key={item.level} className="flex items-center gap-3">
              <div
                className={`flex size-11 shrink-0 items-center justify-center rounded-full ${colors.softBg} ${colors.softText}`}
              >
                <Icon size={20} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  {item.level}
                </p>
                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpectrumGuide;
