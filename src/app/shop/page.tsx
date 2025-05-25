"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProductShowcase from "@/components/ShopRight/ProductShowcase/ProductShowcase";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

export default function Shop() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("4092116031");

  // Debounce effect
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setDebouncedSearchQuery("");
  };

  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
    setSearchQuery("");
    setDebouncedSearchQuery("");
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide">
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
          <div className={`w-full h-[100px] mt-4`}>
            <Image
              src="/images/ShopRightBanner.png"
              alt="ShopRight Banner"
              width={1920}
              height={250}
              className="object-cover rounded-xl w-full h-full"
              priority
            />
          </div>

          <div className={`w-full my-5 ${isMobile ? "px-2" : "px-4"}`}>
            <div className="relative">
              <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-sm border border-gray-200 hover:border-slate-400 focus-within:border-slate-600 focus-within:ring-1 focus-within:ring-slate-600 transition-all duration-200">
                {/* Category Select - Full width on mobile, normal on larger screens */}
                <div className="relative w-full sm:w-auto">
                  <select
                    className="w-full pl-10 pr-8 py-2.5 text-sm bg-transparent font-medium text-gray-700 sm:border-r border-gray-200 appearance-none focus:outline-none focus:ring-0 cursor-pointer"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="4092116031">All Categories</option>
                    <option value="1389401031">Phone</option>
                    <option value="1375424031">Laptop</option>
                    <option value="1375458031">Tablet</option>
                    <option value="1375420031">Mouse</option>
                    <option value="1388921031">Headphones</option>
                    <option value="1375419031">Keyboard</option>
                    <option value="1375392031">Desktops</option>
                  </select>

                  {/* Category dropdown icon - positioned differently on mobile */}
                  <div className="absolute inset-y-0 left-3 sm:left-[120px] flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Search Input - Full width on mobile */}
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products like 'Gaming Keyboard'..."
                    className="w-full pl-4 sm:pl-14 pr-12 py-2.5 text-sm bg-transparent outline-none placeholder-gray-400 text-gray-700 sm:rounded-r-lg"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />

                  {/* Search and Clear buttons */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        aria-label="Clear search"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                    <button
                      className="ml-1 p-1 text-gray-500 hover:text-slate-700 transition-colors duration-200"
                      aria-label="Search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isMobile ? "px-2" : "px-4"} mt-8 mb-6 text-sm`}>
            Side-by-side comparisons of features, reviews, and pro gamer picks —
            so you always choose gear that levels up your game.
          </div>

          <div className={`space-y-8 ${isMobile ? "" : "px-4"}`}>
            <ProductShowcase
              categoryId={selectedCategory}
              searchQuery={debouncedSearchQuery}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
