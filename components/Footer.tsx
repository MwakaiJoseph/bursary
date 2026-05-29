import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="safe-bottom w-full bg-ngcdf-dark text-white">
      <div className="page-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:gap-6 sm:py-8">
        <p className="max-w-sm text-center text-xs leading-relaxed text-white/90 sm:text-left sm:text-sm">
          © 2024 NG-CDF Bursary System. All Rights Reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-6"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="touch-target inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
