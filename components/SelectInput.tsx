"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
};

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  function SelectInput(
    {
      label,
      options,
      placeholder = "Select an option",
      error,
      id,
      className = "",
      ...props
    },
    ref
  ) {
    const selectId =
      id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full min-w-0">
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-ngcdf-text"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`touch-target w-full min-w-0 rounded-lg border border-ngcdf-border bg-white px-4 py-2.5 text-base text-ngcdf-text transition-colors focus:border-ngcdf-primary focus:outline-none focus:ring-2 focus:ring-ngcdf-primary/20 disabled:cursor-not-allowed disabled:bg-gray-50 sm:text-sm ${className} ${
            error ? "border-red-500" : ""
          }`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);
