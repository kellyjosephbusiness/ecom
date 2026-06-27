import React from "react";
import Link from "next/link";
import StarRating from "./StarRating";
import { CommunityCardData } from "@/types/directory";

// Compact community/facility card used on city, care-type and browse pages.
export default function CommunityCard({ facility }: { facility: CommunityCardData }) {
  const {
    name,
    href,
    tagline,
    city,
    state,
    careTypes = [],
    logoUrl,
    rating,
    startingMonthlyCost,
    featured,
  } = facility;

  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-1">
      {featured && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-blue px-3 py-1 text-xs font-medium text-white">
          Featured
        </span>
      )}

      <Link href={href} className="block aspect-[16/10] w-full overflow-hidden bg-gray-2">
        {logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full items-center justify-center text-sm text-dark-4">
            No image
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {(city || state) && (
          <p className="mb-1 text-sm text-dark-4">
            {[city, state].filter(Boolean).join(", ")}
          </p>
        )}

        <h3 className="mb-1 font-semibold text-dark">
          <Link href={href} className="duration-200 hover:text-blue">
            {name}
          </Link>
        </h3>

        {tagline && <p className="mb-3 line-clamp-2 text-sm text-dark-4">{tagline}</p>}

        {typeof rating === "number" && <StarRating overall={rating} className="mb-3" />}

        {careTypes.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {careTypes.slice(0, 3).map((c) => (
              <span key={c} className="rounded-full bg-gray-2 px-2.5 py-1 text-xs text-dark">
                {c}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between">
          {typeof startingMonthlyCost === "number" ? (
            <p className="text-sm text-dark-4">
              From{" "}
              <span className="font-semibold text-dark">
                ${startingMonthlyCost.toLocaleString()}
              </span>
              /mo
            </p>
          ) : (
            <span />
          )}
          <Link href={href} className="text-sm font-medium text-blue duration-200 hover:underline">
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}
