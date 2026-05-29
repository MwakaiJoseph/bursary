import { PageShell } from "@/components/PageShell";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <PageShell activePath="/faq">
      <section className="hero-gradient w-full">
        <div className="page-container section-padding">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-2xl font-bold text-ngcdf-text sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h1>
            <div className="mt-3 h-1 w-20 rounded-full bg-ngcdf-primary" aria-hidden />
            <p className="mt-5 text-sm leading-relaxed text-ngcdf-grey sm:mt-6 sm:text-base">
              Find answers to common questions about the NG-CDF Bursary System.
              For constituency-specific queries, contact your local NG-CDF office.
            </p>

            <div className="mt-8 sm:mt-10">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
