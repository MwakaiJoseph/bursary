import { PageShell } from "@/components/PageShell";
import {
  CheckCircle2,
  FileText,
  ListOrdered,
  Search,
  Bell,
} from "lucide-react";

const SECTIONS = [
  {
    icon: CheckCircle2,
    title: "Eligibility",
    items: [
      "Must be a resident of the selected constituency",
      "Enrolled in an accredited primary, secondary, tertiary, or university institution",
      "Demonstrated financial need as assessed by the constituency committee",
      "Meet any additional criteria set by your local NG-CDF Bursary Committee",
    ],
  },
  {
    icon: FileText,
    title: "Required Documents",
    items: [
      "National ID or birth certificate (applicant)",
      "Parent or guardian national ID",
      "Admission letter from institution",
      "Current fee structure or invoice",
      "Proof of residence within the constituency",
      "Recent passport-size photograph (digital upload)",
    ],
  },
  {
    icon: ListOrdered,
    title: "Application Steps",
    items: [
      "Select your county and constituency on the home page",
      "Register once as a new applicant or login if returning",
      "Complete the online application form with accurate details",
      "Upload required supporting documents",
      "Review and submit your application before the deadline",
    ],
  },
  {
    icon: Search,
    title: "Review Process",
    items: [
      "Constituency bursary committee receives submitted applications",
      "Applications are verified against eligibility and documentation",
      "Shortlisted candidates may be invited for in-person verification",
      "Committee recommends beneficiaries based on available allocation",
      "Approved list is published through official channels",
    ],
  },
  {
    icon: Bell,
    title: "Notifications & Status Tracking",
    items: [
      "Receive email/SMS confirmation upon successful submission",
      "Track application status through your secure applicant portal",
      "Notifications at each review stage: received, under review, decision",
      "Download approval or regret letters when available",
    ],
  },
];

export default function GuidelinesPage() {
  return (
    <PageShell activePath="/guidelines">
      <section className="hero-gradient w-full">
        <div className="page-container section-padding">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-2xl font-bold text-ngcdf-text sm:text-3xl md:text-4xl">
              Application Guidelines
            </h1>
            <div className="mt-3 h-1 w-20 rounded-full bg-ngcdf-primary" aria-hidden />
            <p className="mt-5 text-sm leading-relaxed text-ngcdf-grey sm:mt-6 sm:text-base">
              Follow these guidelines to prepare a complete bursary application.
              Requirements may vary slightly by constituency — always confirm with
              your local NG-CDF office.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-10 sm:pb-12 md:pb-16">
        <div className="page-container mx-auto max-w-4xl space-y-5 sm:space-y-6 md:space-y-8">
          {SECTIONS.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="rounded-xl border border-ngcdf-border bg-white p-4 shadow-sm sm:p-6 md:p-8"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ngcdf-light-bg">
                  <Icon className="h-5 w-5 text-ngcdf-primary" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-ngcdf-text sm:text-xl">
                  {title}
                </h2>
              </div>
              <ul className="space-y-2.5 sm:space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-ngcdf-grey"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ngcdf-primary" />
                    <span className="min-w-0 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
