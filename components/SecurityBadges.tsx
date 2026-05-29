import { Lock, UserCheck, ClipboardList, Eye } from "lucide-react";

const BADGES = [
  { icon: Lock, label: "Secure login" },
  { icon: UserCheck, label: "One-time registration" },
  { icon: ClipboardList, label: "Application tracking" },
  { icon: Eye, label: "Transparent & auditable" },
];

export function SecurityBadges() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
      {BADGES.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-ngcdf-border bg-white px-3 py-2 text-xs text-ngcdf-grey sm:py-1.5"
        >
          <Icon className="h-3.5 w-3.5 shrink-0 text-ngcdf-primary" aria-hidden />
          <span className="truncate">{label}</span>
        </span>
      ))}
    </div>
  );
}
