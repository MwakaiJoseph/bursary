"use client";

import { forwardRef, InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  function FormInput({ label, error, hint, id, className = "", ...props }, ref) {
    const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full min-w-0">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-ngcdf-text sm:text-sm"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`touch-target w-full min-w-0 rounded-lg border border-ngcdf-border bg-white px-4 py-2.5 text-base text-ngcdf-text transition-colors placeholder:text-ngcdf-grey/60 focus:border-ngcdf-primary focus:outline-none focus:ring-2 focus:ring-ngcdf-primary/20 disabled:cursor-not-allowed disabled:bg-gray-50 sm:text-sm ${className} ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
          }`}
          {...props}
        />
        {hint && !error && (
          <p className="mt-1 text-xs text-ngcdf-grey">{hint}</p>
        )}
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);
