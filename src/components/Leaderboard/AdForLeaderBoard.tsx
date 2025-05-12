"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface AdSlide {
  title: string;
  description: string;
}

interface AdProps {
  slides?: AdSlide[];
  width?: string;
  height?: string;
  showRemoveBtn?: boolean;
}

export default function AdForLeaderBoard({
  slides = [
    {
      title: "REMOVE ADS",
      description:
        "Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.",
    },
  ],
  width = "100%",
  height = "auto",
  showRemoveBtn = true,
}: AdProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center" style={{ width, height }}>
      {/* Ad Card */}
      <div className="bg-[#1f1f2e] p-4 shadow-md border border-gray-800 text-white w-full min-h-[250px]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <p className="font-[roboto] text-xs text-gray-300 font-medium tracking-widest">
            ADVERTISEMENT
          </p>
          {showRemoveBtn && (
            <a
              href="#"
              className="font-[roboto] text-xs text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline"
            >
              <button>Remove Ads</button>
              <Image
                src="/images/icons/go-to-the-link.svg"
                alt="Link"
                width={12}
                height={12}
              />
            </a>
          )}
        </div>

        {/* Slide Content */}
        <div className="py-6 min-h-[100px] transition-all duration-500 ease-in-out">
          <div className="font-[roboto] mt-8">
            <button className="px-4 py-3 rounded-md border-2 bg-[radial-gradient(ellipse_at_center,_#56319F_0%,_#171233_70%,_#0a0615_100%)] text-white text-xs shadow-lg">
              {slides[activeSlide].title}
            </button>
          </div>
          <p className="font-[roboto] text-[var(--adtext)] font-normal text-sm">
            {slides[activeSlide].description}
          </p>
        </div>

        {/* Optional: Carousel Dots if more than 1 slide */}
        {slides.length > 1 && (
          <div className="flex justify-center space-x-2 pt-2">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  activeSlide === index ? "bg-yellow-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
