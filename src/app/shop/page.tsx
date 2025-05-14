"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductShowcase from "@/components/ShopRight/ProductShowcase/ProductShowcase";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { Search, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function Shop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide">
        <div
          className={`pt-20 fixed top-0 z-30 w-full shadow-md px-4 py-3 transition-all duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        ></div>
        {!isMobile && (
          <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
            <div className="bg-gray-400 h-[calc(50%-1rem)] rounded-lg p-4 flex flex-col"></div>
            <div className="bg-gray-400 h-[calc(50%-.3rem)] rounded-lg p-4 flex flex-col"></div>
          </div>
        )}
        <div
          className={`pt-16 pb-20 ${isMobile ? "px-4" : "pr-[350px] pl-5"}`}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className={`w-full h-[100px] mt-4 ${isMobile ? "" : "px-6"}`}>
            <Image
              src="/images/ShopRightBanner.png"
              alt="ShopRight Banner"
              width={1920}
              height={250}
              className="object-cover rounded-xl w-full h-full"
              priority
            />
          </div>

          <div className={`w-full my-5 ${isMobile ? "" : "px-10"}`}>
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
                className="w-full pl-28 pr-10 py-2 appearance-none bg-transparent outline-none shadow-sm rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 my-auto h-full flex items-center pr-3">
                {searchQuery && (
                  <button onClick={clearSearch} className="mr-2 text-black">
                    <X size={18} />
                  </button>
                )}
                <span className="text-black">
                  <Search size={18} />
                </span>
              </div>
            </div>
          </div>

          <div className={`${isMobile ? "px-2" : "px-10"} mt-8 mb-6 text-sm`}>
            Side-by-side comparisons of features, reviews, and pro gamer picks —
            so you always choose gear that levels up your game.
          </div>

          <div className="space-y-8">
            <ProductShowcase />
            <ProductShowcase />
            <ProductShowcase />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
