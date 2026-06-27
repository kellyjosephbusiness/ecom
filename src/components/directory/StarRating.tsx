import React from "react";
import { RatingCategory } from "@/types/directory";

const StarIcon = ({ active }: { active: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={active ? "text-[#FBB040]" : "text-gray-3"}
  >
    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27Z" />
  </svg>
);

type Props = {
  overall?: number;
  max?: number;
  subcategories?: RatingCategory[];
  showValue?: boolean;
  className?: string;
};

// Overall star row + optional subcategory bars (Staff, Care, Food, ...).
export default function StarRating({
  overall = 0,
  max = 5,
  subcategories,
  showValue = true,
  className = "",
}: Props) {
  const rounded = Math.round(overall);
  return (
    <div className={className}>
      <div className="flex items-center gap-1.5">
        <div className="flex" aria-label={`${overall} out of ${max} stars`}>
          {Array.from({ length: max }, (_, i) => (
            <StarIcon key={i} active={i < rounded} />
          ))}
        </div>
        {showValue && (
          <span className="text-sm font-medium text-dark">{overall.toFixed(1)}</span>
        )}
      </div>

      {subcategories && subcategories.length > 0 && (
        <ul className="mt-3 space-y-2">
          {subcategories.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-sm text-dark-4">{c.label}</span>
              <span className="relative h-2 flex-1 rounded-full bg-gray-3">
                <span
                  className="absolute left-0 top-0 h-2 rounded-full bg-blue"
                  style={{ width: `${Math.max(0, Math.min(1, c.score / max)) * 100}%` }}
                />
              </span>
              <span className="w-8 shrink-0 text-right text-sm font-medium text-dark">
                {c.score.toFixed(1)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
