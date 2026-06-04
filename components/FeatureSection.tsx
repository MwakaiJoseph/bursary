import { FeatureCard } from "./FeatureCard";
import { HOME_FEATURES, AUTH_FEATURES } from "@/lib/constants";

type FeatureSectionProps = {
  variant?: "home" | "auth";
};

export function FeatureSection({ variant = "home" }: FeatureSectionProps) {
  const features = variant === "auth" ? AUTH_FEATURES : HOME_FEATURES;

  if (variant === "home") {
    return (
      <section className="w-full border-t border-ngcdf-border bg-white py-10 sm:py-12 lg:py-14">
        <div className="page-container">
          <div className="grid grid-cols-1 divide-y divide-ngcdf-border sm:grid-cols-2 sm:divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                variant="wireframe"
                className={
                  index > 0 ? "lg:border-l-0" : ""
                }
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full border-t border-ngcdf-border bg-white section-padding">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
