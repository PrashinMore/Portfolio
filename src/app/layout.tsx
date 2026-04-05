import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { PageLoader } from "@/components/layout/PageLoader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SITE } from "@/lib/constants";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE.name} · ${SITE.role}`;
const description = `${SITE.tagline} ${SITE.name} is a senior full-stack engineer with 5+ years building microservices, fintech systems, and SaaS on Kubernetes and cloud.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  ),
  title: {
    default: title,
    template: `%s · ${SITE.name}`,
  },
  description,
  keywords: [
    "Prashin More",
    "full stack developer",
    "SDE-3",
    "microservices",
    "Kubernetes",
    "Node.js",
    "React",
    "fintech",
    "backend engineer",
    "Jio Platforms",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030014",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${sans.variable} ${mono.variable} relative min-h-full bg-[#030014] font-sans text-zinc-100 antialiased`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <PageLoader />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
