import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NG-CDF Bursary System | National Government Constituencies Development Fund",
  description:
    "Official NG-CDF Bursary System prototype — apply for constituency bursary support across Kenya's 290 constituencies.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#064e3b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
