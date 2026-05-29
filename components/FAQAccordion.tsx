"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-ngcdf-border bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="touch-target flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100 sm:items-center sm:px-5"
              aria-expanded={isOpen}
            >
              <span className="min-w-0 flex-1 pr-2 text-sm font-semibold leading-snug text-ngcdf-text sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`mt-0.5 h-5 w-5 shrink-0 text-ngcdf-primary transition-transform duration-200 sm:mt-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-ngcdf-border px-4 py-4 text-sm leading-relaxed text-ngcdf-grey sm:px-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
