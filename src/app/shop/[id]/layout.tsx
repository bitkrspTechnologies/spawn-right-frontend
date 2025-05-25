import type { Metadata } from "next";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Shop Smart Play Better",
};

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${audiowide.className} relative min-h-screen`}>
      <div className="glow-overlay top-[30%] left-[50%] hidden lg:block"></div>
      <div className="glow-overlay top-[80%] left-[20%] hidden lg:block"></div>
      <div className="glow-overlay bottom-[10%] right-[30%] hidden lg:block"></div>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
