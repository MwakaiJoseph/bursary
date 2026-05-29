import {
  FileCheck,
  ShieldCheck,
  Users,
  GraduationCap,
  Lock,
  UserCheck,
  ClipboardList,
  Bell,
  LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "file-check": FileCheck,
  "shield-check": ShieldCheck,
  users: Users,
  "graduation-cap": GraduationCap,
  lock: Lock,
  "user-check": UserCheck,
  "clipboard-list": ClipboardList,
  bell: Bell,
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: keyof typeof ICONS | string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = ICONS[icon] ?? ShieldCheck;

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
