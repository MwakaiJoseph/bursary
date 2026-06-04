import {
  FileCheck,
  ShieldCheck,
  Users,
  GraduationCap,
  Lock,
  UserCheck,
  ClipboardList,
  Bell,
  Landmark,
  LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "file-check": FileCheck,
  "shield-check": ShieldCheck,
  users: Users,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  lock: Lock,
  "user-check": UserCheck,
  "clipboard-list": ClipboardList,
  bell: Bell,
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: keyof typeof ICONS | string;
  variant?: "default" | "wireframe";
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  variant = "default",
  className = "",
}: FeatureCardProps) {
  const Icon = ICONS[icon] ?? ShieldCheck;

  if (variant === "wireframe") {
    return (
      <article
        className={`flex flex-col items-center px-6 py-8 text-center sm:px-8 lg:py-10 ${className}`}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ngcdf-light-bg sm:h-[4.5rem] sm:w-[4.5rem]">
          <Icon className="h-7 w-7 text-ngcdf-primary sm:h-8 sm:w-8" aria-hidden />
        </div>
        <h3 className="mb-2 text-base font-bold text-ngcdf-text">{title}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-ngcdf-grey">
          {description}
        </p>
      </article>
    );
  }

  return (
    <article className="h-full rounded-xl border border-ngcdf-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 md:p-6">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-ngcdf-light-bg sm:mb-4 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-ngcdf-primary sm:h-6 sm:w-6" aria-hidden />
      </div>
      <h3 className="mb-1.5 text-base font-semibold text-ngcdf-text sm:mb-2 sm:text-lg">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-ngcdf-grey">{description}</p>
    </article>
  );
}
