"use client";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AdForLeaderBoard from "../Leaderboard/AdForLeaderBoard";

export default function ProductDetailSkeleton() {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide">
        <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
          {/* <div className="bg-gray-700 h-[calc(50%-1rem)] rounded-lg p-4 flex flex-col animate-pulse"></div>
          <div className="bg-gray-700 h-[calc(50%-.3rem)] rounded-lg p-4 flex flex-col animate-pulse"></div> */}
          <AdForLeaderBoard />
          <AdForLeaderBoard />
        </div>
        <div
          className="pt-16 pb-20 pr-[350px] pl-5"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className="space-y-8">
            <div className="w-full max-w-6xl mx-auto rounded-lg shadow-md overflow-hidden">
              {/* Offer Banner Skeleton */}
              <div className="p-2 md:p-4 bg-gray-700 text-white text-center my-4 md:my-8 animate-pulse h-10 md:h-12"></div>

              {/* Image Gallery Skeleton */}
              <div className="relative w-full h-48 sm:h-64 md:h-96 bg-gray-700 animate-pulse">
                <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-1 md:gap-2">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-500"
                    />
                  ))}
                </div>
              </div>

              {/* Product Info Skeleton */}
              <div className="p-4 md:p-6">
                {/* Rating Skeleton */}
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mb-4">
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-sm"
                      />
                    ))}
                  </div>
                  <div className="w-16 h-4 bg-gray-600 rounded"></div>
                </div>

                {/* Title Skeleton */}
                <div className="h-6 w-3/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-700 rounded mb-6 animate-pulse"></div>

                {/* Price Skeleton */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-8 w-20 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
                </div>

                {/* Description Skeleton */}
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-4/6 bg-gray-700 rounded animate-pulse"></div>
                </div>

                {/* Buttons Skeleton */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="h-10 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-700 rounded animate-pulse"></div>
                </div>

                {/* Details Skeleton */}
                <div className="space-y-3 mt-10">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 w-40 bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Specifications Skeleton */}
                <div className="flex items-center justify-start my-8 md:my-16">
                  <div className="w-full max-w-2xl">
                    <ul className="space-y-3 md:space-y-6">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gray-700 mr-2 md:mr-4 animate-pulse"></div>
                          <div className="h-4 w-48 bg-gray-700 rounded animate-pulse"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* About Item Skeleton */}
                <div className="my-6 md:my-8">
                  <div className="h-6 w-32 bg-gray-700 rounded mb-4 animate-pulse"></div>
                  <ul className="space-y-3 list-disc pl-5">
                    {[0, 1, 2, 3].map((index) => (
                      <li key={index}>
                        <div className="h-3 w-full bg-gray-700 rounded animate-pulse"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews Skeleton */}
          <div className="my-10 mb-24">
            <div className="h-6 w-48 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="bg-gray-700 p-6 rounded-lg animate-pulse h-24"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
