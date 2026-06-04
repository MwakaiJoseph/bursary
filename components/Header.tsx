"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  Info,
  BookOpen,
  HelpCircle,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { NAV_LINKS, SITE_NAME, SITE_SUBTITLE } from "@/lib/constants";
import logo from "@/uploads/logo.png";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  About: Info,
  Guidelines: BookOpen,
  FAQ: HelpCircle,
  Login: LogIn,
};

type HeaderProps = {
  activePath?: string;
};

export function Header({ activePath }: HeaderProps) {
  const pathname = usePathname();
  const current = activePath ?? pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ngcdf-border bg-white">
      <div className="page-container flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative h-11 w-11 shrink-0 sm:h-14 sm:w-14">
            <Image
              src={logo}
              alt="Coat of Arms of Kenya — NG-CDF Bursary System"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 44px, 56px"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="text-lg font-bold text-ngcdf-primary sm:text-xl">
              {SITE_NAME}
            </p>
            <p className="text-[10px] font-medium tracking-[0.2em] text-ngcdf-grey sm:text-xs">
              {SITE_SUBTITLE}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? current === "/"
                : current === href || current.startsWith(`${href}?`);
            const showIcon = label === "Login";
            const Icon = ICON_MAP[label] ?? Home;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-ngcdf-primary transition-colors ${
                  isActive
                    ? "border-b-2 border-ngcdf-primary"
                    : "border-b-2 border-transparent hover:opacity-80"
                }`}
              >
                {showIcon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="touch-target flex shrink-0 items-center justify-center rounded-lg p-2 text-ngcdf-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-black/20 lg:hidden sm:top-[68px]"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ngcdf-border bg-white px-4 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? current === "/"
                    : current === href || current.startsWith(`${href}?`);
                const Icon = ICON_MAP[label] ?? Home;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`touch-target flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium ${
                        isActive
                          ? "bg-ngcdf-light-bg text-ngcdf-primary"
                          : "text-ngcdf-primary active:bg-gray-50"
                      }`}
                    >
                      {label === "Login" && (
                        <Icon className="h-5 w-5 shrink-0" />
                      )}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
