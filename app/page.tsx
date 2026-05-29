import { GraduationCap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ConstituencySelector } from "@/components/ConstituencySelector";
import { InfoCard } from "@/components/InfoCard";
import { FeatureSection } from "@/components/FeatureSection";
import { SecurityBadges } from "@/components/SecurityBadges";

export default function HomePage() {
  return (
    <PageShell activePath="/">
      <section className="hero-gradient w-full">
        <div className="page-container section-padding">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Constituency selector first on mobile for faster access */}
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl font-bold tracking-tight text-ngcdf-text min-[480px]:text-3xl sm:text-4xl lg:text-5xl">
                NG-CDF BURSARY SYSTEM
              </h1>
              <div
                className="mt-3 h-1 w-20 rounded-full bg-ngcdf-primary"
                aria-hidden
              />
              <p className="mt-3 text-base font-medium text-ngcdf-primary-alt sm:mt-4 sm:text-lg">
                Empowering students. Transforming communities.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ngcdf-grey sm:mt-6 sm:text-base">
                The NG-CDF Bursary System is an online platform that allows
                eligible students to apply for bursary funds from their
                respective constituencies.
              </p>
              <div className="mt-6 sm:mt-8">
                <InfoCard icon={GraduationCap} title="Investing in Education">
                  Building a better future for our communities through
                  education.
                </InfoCard>
              </div>
              <SecurityBadges />
            </div>

            <div className="order-1 lg:order-2">
              <ConstituencySelector />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection variant="home" />
    </PageShell>
  );
}
