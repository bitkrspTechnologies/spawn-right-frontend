import SuspenseLoader from "@/components/SuspenseLoader/SuspenseLoader";
import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import { Suspense } from "react";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shop Right",
  description: "Shop Smart Play Better",
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
  );
}
