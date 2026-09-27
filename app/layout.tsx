import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karter Steinle — Cybersecurity & Technical Operations",
  description:
    "Technical portfolio and security engineering case study. U.S. Army Sergeant building practical experience in defensive security, systems security, and information assurance.",
  keywords: [
    "Karter Steinle",
    "Cybersecurity",
    "Technical Operations",
    "Defensive Security",
    "SOC",
    "Information Assurance",
    "RMF",
    "Systems Security",
    "RatingScope",
  ],
  authors: [{ name: "Karter Steinle" }],
  creator: "Karter Steinle",
  openGraph: {
    title: "Karter Steinle — Cybersecurity & Technical Operations",
    description:
      "Technical portfolio and security engineering case study. U.S. Army Sergeant building practical experience in defensive security, systems security, and information assurance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
