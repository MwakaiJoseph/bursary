"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Info, CheckCircle2 } from "lucide-react";
import { SelectInput } from "./SelectInput";
import {
  COUNTIES,
  TOTAL_COUNTIES,
  TOTAL_CONSTITUENCIES,
  canProceedToApply,
  getConstituenciesForCounty,
} from "@/lib/kenya-constituencies";

export function ConstituencySelector() {
  const router = useRouter();
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");

  const countyOptions = useMemo(
    () => COUNTIES.map((c) => ({ value: c, label: c })),
    []
  );

  const constituencyOptions = useMemo(() => {
    return getConstituenciesForCounty(county).map((c) => ({
      value: c,
      label: c,
    }));
  }, [county]);

  const canProceed = canProceedToApply(county, constituency);

  const handleCountyChange = (value: string) => {
    setCounty(value);
    setConstituency("");
  };

  const handleProceed = () => {
    if (!canProceedToApply(county, constituency)) return;
    router.push(
      `/auth?constituency=${encodeURIComponent(constituency)}&county=${encodeURIComponent(county)}`
    );
  };

  return (
    <div className="w-full min-w-0 rounded-xl border border-ngcdf-border bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 md:p-8">
      <div className="mb-5 flex items-start gap-3 sm:mb-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ngcdf-light-bg sm:h-11 sm:w-11">
          <MapPin className="h-5 w-5 text-ngcdf-primary" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-ngcdf-text sm:text-xl">
            Select Your Constituency
          </h2>
          <p className="mt-1 text-sm leading-snug text-ngcdf-grey">
            Choose your constituency to check eligibility and apply for bursary
          </p>
          <p className="mt-1 text-xs text-ngcdf-grey">
            All {TOTAL_COUNTIES} counties · {TOTAL_CONSTITUENCIES} constituencies
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <SelectInput
          label="Select County"
          name="county"
          value={county}
          onChange={(e) => handleCountyChange(e.target.value)}
          options={countyOptions}
          placeholder="Select your county"
        />
        <SelectInput
          label="Select Constituency"
          name="constituency"
          value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
          options={constituencyOptions}
          placeholder={
            county ? "Select your constituency" : "Select a county first"
          }
          disabled={!county}
        />

        <div className="flex gap-3 rounded-lg bg-ngcdf-light-bg p-3 sm:p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-ngcdf-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-ngcdf-text">
            Select any county and constituency from the lists above, then proceed
            to login or register for your bursary application.
          </p>
        </div>

        {canProceed && (
          <div className="flex items-start gap-2 rounded-lg border border-ngcdf-primary/30 bg-ngcdf-light-bg px-3 py-3 text-sm text-ngcdf-primary sm:items-center sm:px-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0" aria-hidden />
            <span className="min-w-0 break-words">
              Ready: <strong>{constituency}</strong>, {county}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={handleProceed}
          disabled={!canProceed}
          aria-disabled={!canProceed}
          className="touch-target w-full rounded-lg bg-ngcdf-primary px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-ngcdf-dark focus:outline-none focus:ring-2 focus:ring-ngcdf-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-3"
        >
          PROCEED TO APPLY
        </button>
      </div>
    </div>
  );
}
