import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AuthCard } from "@/components/AuthCard";
import { InfoCard } from "@/components/InfoCard";
import { FeatureSection } from "@/components/FeatureSection";
import { DEFAULT_CONSTITUENCY } from "@/lib/constants";

type AuthPageProps = {
  searchParams: Promise<{ constituency?: string; county?: string }>;
};

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const params = await searchParams;
  const constituency =
    params.constituency?.trim() || DEFAULT_CONSTITUENCY;
  const county = params.county?.trim();

  return (
    <PageShell activePath="/auth" className="auth-gradient">
      <section className="w-full">
        <div className="page-container section-padding">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Auth form first on mobile */}
            <div className="order-1 w-full min-w-0 lg:order-2">
              <AuthCard />
            </div>

            <div className="order-2 w-full min-w-0 lg:order-1">
              <Link
                href="/"
                className="touch-target mb-5 inline-flex items-center gap-2 py-1 text-sm font-medium text-ngcdf-primary transition-colors hover:text-ngcdf-dark sm:mb-6"
              >
                <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
                Back
              </Link>

              <p className="text-xs font-bold tracking-widest text-ngcdf-grey">
                SELECTED CONSTITUENCY
              </p>
              <h1 className="mt-2 break-words text-xl font-bold text-ngcdf-text sm:text-2xl md:text-3xl">
                {constituency} Constituency
              </h1>
              {county && (
                <p className="mt-1 break-words text-sm text-ngcdf-grey">
                  {county}
                </p>
              )}
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ngcdf-grey sm:text-base">
                You have selected {constituency} Constituency. Please login to
                your account or register as a new applicant to begin your
                bursary application.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8">
                <InfoCard icon={UserPlus} title="One Account. One Time Registration.">
                  New applicants only need to register once. Returning students
                  can simply login to continue their application.
                </InfoCard>

                <InfoCard variant="help" title="Need Help?">
                  <p>Call our support line: 020 123 4567</p>
                  <p className="mt-1">Mon – Fri, 8:00 AM - 5:00 PM</p>
                </InfoCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection variant="auth" />
    </PageShell>
  );
}
