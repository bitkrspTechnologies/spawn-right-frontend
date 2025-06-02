import type { Metadata } from "next";
import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import TopLoader from "@/components/TopLoader/TopLoader";
import { Suspense } from "react";
import SuspenseLoader from "@/components/SuspenseLoader/SuspenseLoader";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Your ultimate gaming platform for matches, tournaments, and more",
};

export default function TermsOfUseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TopLoader />
      <div
        className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gaming-glow relative min-h-screen text-white`}
      >
        <div className="glow-overlay top-[30%] left-[50%]" />
        <div className="glow-overlay top-[80%] left-[20%]" />
        <div className="glow-overlay bottom-[10%] right-[30%]" />
        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-26">
              <SuspenseLoader />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
