import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.role}`,
  description: portfolioData.bio,
  keywords: ["portfolio", "Gen Z", "developer", "Next.js", "TypeScript", portfolioData.name],
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
