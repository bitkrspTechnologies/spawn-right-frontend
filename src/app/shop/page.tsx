"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { Search, X } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className={`pt-20 fixed top-0 z-30 w-full shadow-md px-4 py-3 transition-all duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        ></div>

        {/* Fixed Right Sidebar */}
        <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
          <div className="bg-gray-400 h-[calc(50%-1rem)] rounded-lg p-4 flex flex-col"></div>

          <div className="bg-gray-400 h-[calc(50%-.3rem)] rounded-lg p-4 flex flex-col"></div>
          {/* Sidebar content */}
        </div>

        <div className="h-full pt-16 p-5 overflow-y-auto mr-[320px] scrollbar-hide">
          <div className="w-full h-[100px] mt-4 px-4">
            <Image
              src="/images/ShopRightBanner.png"
              alt="ShopRight Banner"
              width={1920}
              height={250}
              className="object-cover rounded-xl"
              priority
            />
          </div>

          <div className="w-full px-10 my-5">
            <div className="relative mt-2 text-gray-500 bg-white rounded-lg border border-gray-300 focus-within:border-slate-600">
              <div className="absolute inset-y-0 left-0 my-auto h-full flex items-center pl-3">
                <select className="text-sm outline-none rounded-lg h-full bg-transparent font-medium text-gray-800">
                  <option>Keyboard</option>
                  <option>Gaming</option>
                  <option>Mouse</option>
                </select>
                <div className="h-6 border-r mx-2"></div>
              </div>
              <input
                type="text"
                placeholder="Gaming Keyboard"
                className="w-full pl-28 pr-3 py-2 appearance-none bg-transparent outline-none shadow-sm rounded-lg"
              />
              <div className="absolute inset-y-0 right-0 my-auto h-full flex items-center pr-3">
                <span className="mr-2 text-black">
                  <X />
                </span>
                {/* <span className="text-black">|</span> */}

                <span className="ml-2 text-black">
                  <Search />
                </span>
              </div>
            </div>
          </div>

          <span className="px-10 mt-16">
            Side-by-side comparisons of features, reviews, and pro gamer picks —
            so you always choose gear that levels up your game.
          </span>
          <ProductShowcase />
          <ProductShowcase />
          <ProductShowcase />
        </div>
      </div>
      <Footer />
    </>
  );
}
