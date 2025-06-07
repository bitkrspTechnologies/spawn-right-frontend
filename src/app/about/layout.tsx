import type { Metadata } from "next";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About",
  description: "About Our Team",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${audiowide.className} relativee min-h-screenn`}>
      <div className="glow-overlay top-[30%] left-[50%] hidden lg:block"></div>
      <div className="glow-overlay top-[80%] left-[20%] hidden lg:block"></div>
      <div className="glow-overlay bottom-[10%] right-[30%] hidden lg:block"></div>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
