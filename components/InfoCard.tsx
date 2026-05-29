import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "compact" | "help";
  className?: string;
};

export function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
  className = "",
}: InfoCardProps) {
  if (variant === "help") {
    return (
      <div
        className={`rounded-xl border border-ngcdf-border bg-white p-4 shadow-sm sm:p-5 ${className}`}
      >
        <h3 className="mb-2 font-semibold text-ngcdf-primary">{title}</h3>
        <div className="text-sm leading-relaxed text-ngcdf-grey">{children}</div>
      </div>
    );
  }

  if (!Icon) {
    return (
      <div
        className={`rounded-xl border border-ngcdf-border bg-white p-4 shadow-sm sm:p-5 ${className}`}
      >
        <h3 className="mb-1 font-semibold text-ngcdf-text">{title}</h3>
        <div className="text-sm leading-relaxed text-ngcdf-grey">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border border-ngcdf-border bg-white p-4 shadow-sm sm:flex-row sm:gap-4 sm:p-5 ${
        variant === "compact" ? "sm:p-4" : ""
      } ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ngcdf-light-bg sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-ngcdf-primary sm:h-6 sm:w-6" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 font-semibold text-ngcdf-text">{title}</h3>
        <div className="text-sm leading-relaxed text-ngcdf-grey">{children}</div>
      </div>
    </div>
  );
}
