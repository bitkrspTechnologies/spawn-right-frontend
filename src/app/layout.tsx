import type { Metadata } from "next";
import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import TopLoader from "@/components/TopLoader/TopLoader";
import ReactQueryProvider from "./providers";
import { Toaster } from "@/components/ui/sonner";
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
  title: "SpawnRight - Gaming Platform",
  description:
    "Your ultimate gaming platform for matches, tournaments, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gaming-glow relative min-h-screen text-white`}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopLoader />
            <div className="glow-overlay top-[30%] left-[50%] hidden lg:block"></div>
            <div className="glow-overlay top-[80%] left-[20%] hidden lg:block"></div>
            <div className="glow-overlay bottom-[10%] right-[30%] hidden lg:block"></div>

            <main className="flex-grow">
              <Suspense
                fallback={
                  <div className="flex justify-center items-center mt-10">
                    <SuspenseLoader />
                  </div>
                }
              >
                {children}
              </Suspense>
            </main>
            <Toaster />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
