import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karter Steinle · Cybersecurity & Technical Operations",
  description:
    "U.S. Army veteran, cybersecurity and technical operations professional, CompTIA Security+ certified, with an active DoD Secret clearance.",
  keywords: [
    "Karter Steinle",
    "U.S. Army Veteran",
    "Cybersecurity",
    "Technical Operations",
    "CompTIA Security+",
    "DoD Secret Clearance",
    "Colorado Springs",
    "RatingScope",
  ],
  authors: [{ name: "Karter Steinle" }],
  creator: "Karter Steinle",
  openGraph: {
    title: "Karter Steinle · Cybersecurity & Technical Operations",
    description:
      "U.S. Army veteran, cybersecurity and technical operations professional, CompTIA Security+ certified, with an active DoD Secret clearance.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-canvas text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
