import { PageShell } from "@/components/PageShell";
import { ConstituencySelector } from "@/components/ConstituencySelector";
import { HomeEducationCallout } from "@/components/HomeEducationCallout";
import { FeatureSection } from "@/components/FeatureSection";
import homeBg from "@/uploads/home-bg.png";

export default function HomePage() {
  return (
    <PageShell activePath="/">
      <section className="relative w-full overflow-hidden">
        {/* Wireframe: faded high-key hero background */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35] sm:bg-right sm:opacity-40 lg:opacity-45"
          style={{ backgroundImage: `url(${homeBg.src})` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 sm:to-white/50 lg:to-white/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-white/60"
          aria-hidden
        />

        <div className="relative z-10 page-container py-10 sm:py-12 lg:py-14 lg:pb-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* Left column — hero copy */}
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight text-ngcdf-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                NG-CDF BURSARY SYSTEM
              </h1>

              {/* Wireframe: half green, half gray accent line */}
              <div className="mt-4 flex h-[3px] w-28" aria-hidden>
                <span className="h-full w-1/2 bg-ngcdf-primary" />
                <span className="h-full w-1/2 bg-ngcdf-border" />
              </div>

              <p className="mt-4 text-lg font-bold text-ngcdf-text sm:text-xl">
                Empowering students. Transforming communities.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-ngcdf-grey sm:text-base">
                The NG-CDF Bursary System is an online platform that allows
                eligible students to apply for bursary funds from their
                respective constituencies.
              </p>

              <HomeEducationCallout />
            </div>

            {/* Right column — constituency card */}
            <div className="w-full lg:max-w-md lg:justify-self-end xl:max-w-lg">
              <ConstituencySelector />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection variant="home" />
    </PageShell>
  );
}
