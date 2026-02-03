import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VSCodeNavigation from '@/components/VSCodeNavigation';
import IntegratedTerminal from '@/components/IntegratedTerminal';
import Spotlight from '@/components/Spotlight'; 
import FloatingIcons from '@/components/FloatingIcons';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Rayan | Holographic IDE Portfolio",
  description: "Welcome to the holographic IDE portfolio of Muhammad Rayan, a Software Engineer specializing in MERN Stack, AI, and SaaS development. Experience the future of developer portfolios.",
  keywords: ["Muhammad Rayan", "Software Engineer", "MERN Stack", "Holographic", "IDE", "Portfolio", "Cyberpunk", "Developer"],
  authors: [{ name: "Muhammad Rayan" }],
  creator: "Muhammad Rayan",
  openGraph: {
    title: "Muhammad Rayan | Holographic IDE Portfolio",
    description: "Experience the future of developer portfolios with holographic IDE interface",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rayan | Holographic IDE Portfolio",
    description: "Experience the future of developer portfolios with holographic IDE interface",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} font-jetbrains antialiased bg-void text-off-white overflow-x-hidden relative`}
        suppressHydrationWarning={true}
      >
        {/* The Background Layers (z-0) */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-void"></div>
          {/* Aurora Orbs */}
          <div className="aurora-orb aurora-orb-1"></div>
          <div className="aurora-orb aurora-orb-2"></div>
          <div className="aurora-orb aurora-orb-3"></div>
          
          {/* The Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid-pattern"></div>
          </div>

          {/* 2. Add Floating Icons Here */}
          <FloatingIcons />

        </div>
        
        {/* The Spotlight (z-5) */}
        <Spotlight />
        
        {/* The Content (z-10) */}
        <div className="relative z-10">
          <VSCodeNavigation />
          <main className="min-h-screen pt-12">
            {children}
          </main>
          <IntegratedTerminal />
        </div>
      </body>
    </html>
  );
}