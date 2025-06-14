"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProductShowcase from "@/components/ShopRight/ProductShowcase/ProductShowcase";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import { ComparisonDrawer } from "@/components/ShopRight/ComparisonDrawer/ComparisonDrawer";

export default function Shop() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("14142561031");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [compareCount, setCompareCount] = useState(0);

  // Debounce effect
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  // Update compare count when drawer opens or when local storage changes
  useEffect(() => {
    const updateCompareCount = () => {
      try {
        const products = JSON.parse(
          localStorage.getItem("compareProducts") || "[]"
        );
        setCompareCount(products.length);
      } catch (error) {
        console.error("Error reading comparison products:", error);
      }
    };

    updateCompareCount();
    const handleStorageChange = () => {
      updateCompareCount();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isDrawerOpen]);

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
          <div className="fixed mt-10 right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 z-10">
            <AdForLeaderBoard />
            <AdForLeaderBoard />
          </div>
        )}
        <div
          className={`py-16 ${isMobile ? "" : "pr-[350px]"}`}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className="w-full h-[60px] md:h-[100px] mt-4">
            <Image
              src="/images/ShopRightBanner.png"
              alt="ShopRight Banner"
              width={1920}
              height={250}
              className="object-fit rounded-xl w-full h-full"
              priority
            />
          </div>

          <div className={`w-full my-5 ${isMobile ? "px-2" : "px-4"}`}>
            <div className="relative">
              <div className="relative flex flex-col sm:flex-row items-center bg-gray-800 rounded-lg shadow-sm border transition-all duration-200">
                <div className="relative w-full sm:w-auto">
                  <select
                    className="w-full pl-10 lg:pl-4 md:pl-5 pr-14 py-2.5 text-sm font-medium text-gray-200 sm:border-r border-gray-700 appearance-none focus:outline-none focus:ring-0 cursor-pointer"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option
                      value="14142561031"
                      className="bg-gray-700 color-white"
                    >
                      All Categories
                    </option>
                    <option
                      value="1389401031"
                      className="bg-gray-700 color-white"
                    >
                      Phone
                    </option>
                    <option
                      value="1375424031"
                      className="bg-gray-700 color-white"
                    >
                      Laptop
                    </option>
                    <option
                      value="1375458031"
                      className="bg-gray-700 color-white"
                    >
                      Tablet
                    </option>
                    <option
                      value="1375420031"
                      className="bg-gray-700 color-white"
                    >
                      Mouse
                    </option>
                    <option
                      value="1388921031"
                      className="bg-gray-700 color-white"
                    >
                      Headphones
                    </option>
                    <option
                      value="1375419031"
                      className="bg-gray-700 color-white"
                    >
                      Keyboard
                    </option>
                    <option
                      value="1375392031"
                      className="bg-gray-700 color-white"
                    >
                      Desktops
                    </option>
                  </select>

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

                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products like 'Gaming Keyboard'..."
                    className="w-full pl-4 pr-12 py-2.5 text-sm bg-black/70 outline-none placeholder-gray-500 text-gray-200 sm:rounded-r-lg"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />

                  {/* Search and Clear buttons */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="p-1 text-gray-400 transition-colors duration-200"
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
                      className="ml-1 p-1 text-gray-400 transition-colors duration-200"
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

          <div className={`space-y-8 mb-10 ${isMobile ? "" : "px-4"}`}>
            <ProductShowcase
              categoryId={selectedCategory}
              searchQuery={debouncedSearchQuery}
            />
          </div>
          <Footer />
        </div>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="fixed bottom-4 right-4 md:right-[calc(350px+1rem)] z-50 flex items-center justify-center bg-[#FF1ADF] hover:bg-[#f516d7] text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          style={{
            width: "56px",
            height: "56px",
            // padding: isMobile ? "0" : "0 24px",
          }}
        >
          {isMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="2em"
              height="2em"
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="2em"
              height="2em"
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <ComparisonDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </>
  );
}
