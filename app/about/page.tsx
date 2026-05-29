import { PageShell } from "@/components/PageShell";
import {
  Globe,
  Shield,
  Accessibility,
  Scale,
} from "lucide-react";

const PILLARS = [
  {
    icon: Shield,
    title: "Transparency",
    text: "Every application stage is logged and auditable, giving committees and citizens confidence in fair allocation of bursary funds.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "Students can apply from anywhere with internet access, reducing travel costs and barriers for rural and urban applicants alike.",
  },
  {
    icon: Scale,
    title: "Accountability",
    text: "Standardized workflows and reporting support oversight by NG-CDF Board and constituency committees.",
  },
  {
    icon: Globe,
    title: "National Scale",
    text: "A unified platform designed to serve all 290 constituencies with consistent processes and localized committee review.",
  },
];

export default function AboutPage() {
  return (
    <PageShell activePath="/about">
      <section className="hero-gradient w-full">
        <div className="page-container section-padding">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-2xl font-bold text-ngcdf-text sm:text-3xl md:text-4xl">
              About the NG-CDF Bursary System
            </h1>
            <div className="mt-3 h-1 w-20 rounded-full bg-ngcdf-primary" aria-hidden />

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-ngcdf-grey sm:mt-8 sm:space-y-6 sm:text-base">
              <p>
                The <strong className="text-ngcdf-text">NG-CDF Bursary System</strong> is a
                proposed national digital platform under the National Government
                Constituencies Development Fund Board of Kenya. It enables eligible
                students to apply for constituency-level bursary support through a
                secure, standardized online process.
              </p>
              <p>
                Digitization transforms how bursaries are requested, reviewed, and
                disbursed — moving from paper-heavy, inconsistent processes toward a
                modern public service that is faster, fairer, and easier to oversee.
              </p>
              <p>
                This prototype demonstrates the intended user experience and design
                direction for board presentation. Full backend integration,
                authentication, and constituency data will follow in subsequent
                development phases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-ngcdf-border bg-white section-padding">
        <div className="page-container">
          <h2 className="mb-6 text-center text-xl font-bold text-ngcdf-text sm:mb-8 sm:text-2xl">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="h-full rounded-xl border border-ngcdf-border p-5 shadow-sm sm:p-6"
              >
                <Icon className="mb-3 h-7 w-7 text-ngcdf-primary sm:mb-4 sm:h-8 sm:w-8" aria-hidden />
                <h3 className="mb-2 font-semibold text-ngcdf-text">{title}</h3>
                <p className="text-sm leading-relaxed text-ngcdf-grey">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
