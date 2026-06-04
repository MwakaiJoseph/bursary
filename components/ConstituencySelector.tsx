"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Info, ArrowRight } from "lucide-react";
import { SelectInput } from "./SelectInput";
import {
  COUNTIES,
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
    <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] sm:rounded-xl">
      {/* Wireframe: dark green card header */}
      <div className="flex items-start gap-3 bg-ngcdf-primary px-5 py-4 sm:px-6 sm:py-5">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" aria-hidden />
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Select Your Constituency
          </h2>
          <p className="mt-1 text-sm leading-snug text-white/90">
            Choose your constituency to check eligibility and apply for bursary
          </p>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <SelectInput
          label="Select County"
          name="county"
          value={county}
          onChange={(e) => handleCountyChange(e.target.value)}
          options={countyOptions}
          placeholder="-- Select County --"
        />
        <SelectInput
          label="Select Constituency"
          name="constituency"
          value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
          options={constituencyOptions}
          placeholder="-- Select Constituency --"
          disabled={!county}
        />

        <div className="flex gap-3 rounded-md bg-ngcdf-light-bg px-4 py-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-ngcdf-primary" aria-hidden />
          <p className="text-sm leading-relaxed text-ngcdf-text">
            Please select your constituency to proceed with your bursary
            application.
          </p>
        </div>

        <button
          type="button"
          onClick={handleProceed}
          disabled={!canProceed}
          aria-disabled={!canProceed}
          className="touch-target flex w-full items-center justify-center gap-2 rounded-md bg-ngcdf-primary px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-ngcdf-dark focus:outline-none focus:ring-2 focus:ring-ngcdf-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          PROCEED TO APPLY
          <ArrowRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
