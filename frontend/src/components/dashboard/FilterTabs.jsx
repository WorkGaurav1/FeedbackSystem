import { LayoutGrid } from "lucide-react";

import { feedbackSpectrum } from "@/constants/feedbackSpectrum";

const tabs = [
  { level: "All Attributes", icon: LayoutGrid },
  ...feedbackSpectrum,
];

function FilterTabs({ activeFilter, onChange }) {
  return (
    <div className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeFilter === tab.level;

        return (
          <button
            key={tab.level}
            type="button"
            onClick={() => onChange(tab.level)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon size={16} />
            {tab.level}
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;
