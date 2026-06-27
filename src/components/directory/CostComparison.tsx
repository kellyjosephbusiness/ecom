import React from "react";
import Link from "next/link";
import { CostComparisonRow } from "@/types/directory";

// Compares starting monthly cost across communities, with relative bars.
export default function CostComparison({
  title = "Cost comparison",
  rows,
}: {
  title?: string;
  rows: CostComparisonRow[];
}) {
  const costs = rows
    .map((r) => r.startingMonthlyCost)
    .filter((n): n is number => typeof n === "number");
  const max = costs.length ? Math.max(...costs) : 0;

  return (
    <div className="rounded-xl bg-white p-6 shadow-1">
      <h3 className="mb-4 font-semibold text-dark">{title}</h3>
      <ul className="space-y-3">
        {rows.map((r) => {
          const pct =
            max && typeof r.startingMonthlyCost === "number"
              ? (r.startingMonthlyCost / max) * 100
              : 0;
          return (
            <li
              key={r.name}
              className={`rounded-lg border p-3 ${
                r.highlight ? "border-blue bg-blue/5" : "border-gray-3"
              }`}
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-medium text-dark">
                  {r.href ? (
                    <Link href={r.href} className="duration-200 hover:text-blue">
                      {r.name}
                    </Link>
                  ) : (
                    r.name
                  )}
                </span>
                <span className="text-sm font-semibold text-dark">
                  {typeof r.startingMonthlyCost === "number"
                    ? `$${r.startingMonthlyCost.toLocaleString()}/mo`
                    : "—"}
                </span>
              </div>
              <span className="relative block h-2 rounded-full bg-gray-2">
                <span
                  className="absolute left-0 top-0 h-2 rounded-full bg-blue"
                  style={{ width: `${pct}%` }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
