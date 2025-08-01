import type { Metadata } from "next";
import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import TopLoader from "@/components/TopLoader/TopLoader";

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
  title: "Coming Soon",
  description: "We are working to bring the best experience",
};

export default function CommingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <main className="flex-grow">{children}</main>
      </div>
    </ThemeProvider>
  );
}
