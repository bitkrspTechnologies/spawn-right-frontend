"use client";

import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="relative h-full w-full bg-gray-200 rounded-lg overflow-hidden flex flex-col border border-gray-300 animate-pulse">
      <div className="h-40 w-full bg-gray-300 rounded-lg"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="h-8 bg-gray-300 rounded"></div>
          <div className="h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
