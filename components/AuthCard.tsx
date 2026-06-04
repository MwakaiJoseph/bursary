"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { FormInput } from "./FormInput";
import { SelectInput } from "./SelectInput";
import { Toast } from "./Toast";
import { LEARNING_LEVELS } from "@/lib/constants";

type Tab = "login" | "register";

export function AuthCard() {
  const [tab, setTab] = useState<Tab>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const learningOptions = LEARNING_LEVELS.map((level) => ({
    value: level,
    label: level,
  }));

  const showToast = (message: string) => {
    setToast(message);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      "Prototype only: login authentication will be connected during backend development."
    );
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      "Prototype only: account creation flow will be connected during backend development."
    );
  };

  const tabButtonClass = (active: boolean) =>
    `touch-target flex flex-1 items-center justify-center border-b-2 px-3 py-3.5 text-center text-xs font-bold tracking-wide transition-colors sm:px-4 sm:py-4 sm:text-sm ${
      active
        ? "border-ngcdf-primary bg-ngcdf-light-bg/50 text-ngcdf-primary"
        : "border-transparent text-ngcdf-grey hover:bg-gray-50 hover:text-ngcdf-text"
    }`;

  return (
    <>
      <div className="w-full min-w-0 rounded-xl border border-ngcdf-border bg-white shadow-xl sm:rounded-2xl">
        <div
          className="flex flex-col border-b border-ngcdf-border sm:flex-row"
          role="tablist"
          aria-label="Authentication options"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "login"}
            onClick={() => setTab("login")}
            className={tabButtonClass(tab === "login")}
          >
            LOGIN
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "register"}
            onClick={() => setTab("register")}
            className={tabButtonClass(tab === "register")}
          >
            <span className="sm:hidden">REGISTER</span>
            <span className="hidden sm:inline">REGISTER AS NEW APPLICANT</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          {tab === "login" ? (
            <form
              key="login-form"
              onSubmit={handleLogin}
              className="space-y-4 sm:space-y-5"
              role="tabpanel"
              aria-label="Login"
            >
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />

              <div className="w-full min-w-0">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-ngcdf-text"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="touch-target w-full min-w-0 rounded-lg border border-ngcdf-border bg-white py-2.5 pl-4 pr-12 text-base focus:border-ngcdf-primary focus:outline-none focus:ring-2 focus:ring-ngcdf-primary/20 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="touch-target absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-ngcdf-grey hover:text-ngcdf-text"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="touch-target px-2 py-1 text-sm font-medium text-ngcdf-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="touch-target w-full rounded-lg bg-ngcdf-primary py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-ngcdf-dark focus:outline-none focus:ring-2 focus:ring-ngcdf-primary focus:ring-offset-2 sm:py-3"
              >
                Login
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-ngcdf-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-ngcdf-grey">OR</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTab("register")}
                className="touch-target w-full rounded-lg border-2 border-ngcdf-primary py-3.5 text-sm font-bold tracking-wide text-ngcdf-primary transition-colors hover:bg-ngcdf-light-bg sm:py-3"
              >
                <span className="sm:hidden">REGISTER</span>
                <span className="hidden sm:inline">REGISTER AS NEW APPLICANT</span>
              </button>

              <div className="rounded-lg bg-ngcdf-light-bg p-3 text-sm text-ngcdf-text sm:p-4">
                <strong className="font-semibold">New Applicant?</strong> Click
                the register button to create your account. You will only need
                to register once.
              </div>
            </form>
          ) : (
            <form
              key="register-form"
              onSubmit={handleRegister}
              className="space-y-4"
              role="tabpanel"
              aria-label="Register as new applicant"
            >
              <FormInput
                label="Full Name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
              />
              <FormInput
                label="Name of Institution"
                name="institution"
                type="text"
                required
              />
              <SelectInput
                label="Learning Level"
                name="learningLevel"
                options={learningOptions}
                placeholder="Select learning level"
                required
              />
              <FormInput
                label="Email Address"
                name="regEmail"
                type="email"
                autoComplete="email"
                required
              />
              <FormInput
                label="Phone Number (Personal / Parent / Guardian)"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
              <FormInput
                label="Age"
                name="age"
                type="number"
                min={5}
                max={100}
                required
              />

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setTab("login")}
                  className="touch-target w-full rounded-lg border border-ngcdf-border px-6 py-3 text-sm font-semibold text-ngcdf-text transition-colors hover:bg-gray-50 sm:w-auto sm:py-2.5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="touch-target w-full rounded-lg bg-ngcdf-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ngcdf-dark sm:w-auto sm:py-2.5"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="border-t border-ngcdf-border bg-gray-50/80 px-4 py-3 sm:px-8">
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-xs text-ngcdf-grey">
            <Lock className="h-3.5 w-3.5 shrink-0 text-ngcdf-primary" aria-hidden />
            <span>Secure connection · Data protection · Audit-ready platform</span>
          </p>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}
