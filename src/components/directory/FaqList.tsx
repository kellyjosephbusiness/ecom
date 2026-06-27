"use client";
import React, { useState } from "react";
import { FaqItem } from "@/types/directory";

// Accordion FAQ block, reused on facility / city / care-type pages.
export default function FaqList({
  title = "Frequently asked questions",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="rounded-xl bg-white p-6 shadow-1">
      <h3 className="mb-4 font-semibold text-dark">{title}</h3>
      <ul className="divide-y divide-gray-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={i} className="py-3">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-medium text-dark">{item.question}</span>
                <span
                  className={`shrink-0 text-xl leading-none text-blue duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && <p className="mt-2 text-sm text-dark-4">{item.answer}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
