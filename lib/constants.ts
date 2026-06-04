export const SITE_NAME = "NG-CDF";
export const SITE_SUBTITLE = "BURSARY SYSTEM";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/guidelines", label: "Guidelines" },
  { href: "/faq", label: "FAQ" },
  { href: "/auth", label: "Login" },
] as const;

export {
  COUNTIES,
  CONSTITUENCIES_BY_COUNTY,
  TOTAL_COUNTIES,
  TOTAL_CONSTITUENCIES,
  getConstituenciesForCounty,
  canProceedToApply,
} from "./kenya-constituencies";

export const LEARNING_LEVELS = [
  "Primary Special Needs",
  "Secondary",
  "Tertiary",
  "University",
] as const;

export const HOME_FEATURES = [
  {
    title: "Easy Application",
    description: "Simple and secure online application process",
    icon: "file-check" as const,
  },
  {
    title: "Secure & Transparent",
    description:
      "Ensuring fairness and accountability in bursary distribution",
    icon: "shield-check" as const,
  },
  {
    title: "Community Driven",
    description: "Empowering communities to support education",
    icon: "users" as const,
  },
  {
    title: "Better Future",
    description: "Investing in education for a better tomorrow",
    icon: "landmark" as const,
  },
];

export const AUTH_FEATURES = [
  {
    title: "Secure Account",
    description: "Protected login with encrypted credentials in production",
    icon: "lock" as const,
  },
  {
    title: "One-Time Registration",
    description: "Register once and access your account across application cycles",
    icon: "user-check" as const,
  },
  {
    title: "Track Application",
    description: "Monitor your bursary application status in real time",
    icon: "clipboard-list" as const,
  },
  {
    title: "Stay Updated",
    description: "Receive notifications on review outcomes and disbursements",
    icon: "bell" as const,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Who can apply?",
    answer:
      "Eligible students residing within a constituency and meeting the criteria set by the NG-CDF Bursary Committee may apply. Requirements typically include proof of residence, enrollment in an accredited institution, and demonstrated financial need.",
  },
  {
    question: "Can I apply more than once?",
    answer:
      "Applicants may submit one application per academic cycle unless otherwise directed by their constituency committee. Returning students should log in to update or continue an existing application rather than creating duplicate accounts.",
  },
  {
    question: "What documents are required?",
    answer:
      "Commonly required documents include a national ID or birth certificate, admission letter, fee structure, parent or guardian ID, and proof of residence. Exact requirements may vary by constituency.",
  },
  {
    question: "How do I track my application?",
    answer:
      "After logging in, you will be able to view your application status, committee review stage, and final decision. Email and SMS notifications will be sent at key milestones once the full system is deployed.",
  },
  {
    question: "What happens after submission?",
    answer:
      "Your application is reviewed by the constituency bursary committee. Shortlisted applicants may be invited for verification. Approved beneficiaries are notified through the portal and official channels.",
  },
];

/** Default constituency when visiting /auth directly without query params */
export const DEFAULT_CONSTITUENCY = "Westlands";
