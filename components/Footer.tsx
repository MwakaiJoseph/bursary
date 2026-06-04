import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="safe-bottom w-full bg-ngcdf-primary text-white">
      <div className="page-container flex flex-col items-center justify-between gap-4 py-5 sm:flex-row sm:py-6">
        <p className="text-center text-xs text-white sm:text-left sm:text-sm">
          © 2024 NG-CDF Bursary System. All Rights Reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-0 text-sm text-white"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map(({ href, label }, index) => (
            <span key={label} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-3 text-white/70" aria-hidden>
                  |
                </span>
              )}
              <Link
                href={href}
                className="transition-colors hover:text-white/90"
              >
                {label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
