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
  title: "Tournaments - Gaming Platform",
  description:
    "Your ultimate gaming platform for matches, tournaments, and more",
};

export default function TournamentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gaming-glow relative min-h-screen text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoader />
          <div className="glow-overlay top-[30%] left-[50%]"></div>
          <div className="glow-overlay top-[80%] left-[20%]"></div>
          <div className="glow-overlay bottom-[10%] right-[30%]"></div>
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}


// src/app/tournaments/layout.tsx

// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Audiowide } from "next/font/google";
// import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
// import TopLoader from "@/components/TopLoader/TopLoader";

// const audiowide = Audiowide({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   preload: true,
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   preload: true,
// });

// export const metadata: Metadata = {
//   title: "Tournaments - Gaming Platform",
//   description:
//     "Your ultimate gaming platform for matches, tournaments, and more",
// };

// export default function TournamentLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       <TopLoader />
//       <div className={`${audiowide.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gaming-glow relative min-h-screen text-white`}>
//         <div className="glow-overlay top-[30%] left-[50%]"></div>
//         <div className="glow-overlay top-[80%] left-[20%]"></div>
//         <div className="glow-overlay bottom-[10%] right-[30%]"></div>
//         <main className="flex-grow">{children}</main>
//       </div>
//     </ThemeProvider>
//   );
// }

