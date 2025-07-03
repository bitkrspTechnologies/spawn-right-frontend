import type { Metadata } from "next";
import { Inter, Audiowide, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import TopLoader from "@/components/TopLoader/TopLoader";
import ReactQueryProvider from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });
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
  title: "Spawn Right",
  description: "Spawn Right - Your Ultimate Gaming Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TopLoader />
            <div className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gaming-glow relative min-h-screen text-white`}>
              <div className="glow-overlay top-[30%] left-[50%]" />
              <div className="glow-overlay top-[80%] left-[20%]" />
              <div className="glow-overlay bottom-[10%] right-[30%]" />
              <main className="flex-grow">{children}</main>
            </div>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
