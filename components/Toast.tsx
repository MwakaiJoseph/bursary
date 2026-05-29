"use client";

import { useEffect } from "react";
import { X, Info } from "lucide-react";

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};

export function Toast({ message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      role="alert"
      className="fixed bottom-4 left-4 right-4 z-[100] flex max-w-md items-start gap-3 rounded-xl border border-ngcdf-border bg-white p-4 shadow-xl safe-bottom sm:bottom-6 sm:left-auto sm:right-6 sm:w-full"
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-ngcdf-primary" aria-hidden />
      <p className="min-w-0 flex-1 text-sm leading-relaxed text-ngcdf-text">
        {message}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="touch-target flex shrink-0 items-center justify-center rounded p-1 text-ngcdf-grey hover:bg-gray-100 hover:text-ngcdf-text"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
