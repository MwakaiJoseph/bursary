import { GraduationCap } from "lucide-react";

export function HomeEducationCallout() {
  return (
    <div className="mt-6 flex gap-4 rounded-lg border border-ngcdf-border/80 bg-[#f3f4f6] p-4 sm:mt-8 sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ngcdf-primary sm:h-14 sm:w-14">
        <GraduationCap className="h-6 w-6 text-white sm:h-7 sm:w-7" aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-ngcdf-primary">Investing in Education</h3>
        <p className="mt-1 text-sm leading-relaxed text-ngcdf-grey">
          Building a better future for our communities through education.
        </p>
      </div>
    </div>
  );
}
