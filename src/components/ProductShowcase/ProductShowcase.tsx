"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Get current items
  const currentProducts = products.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white/10 backdrop-blur-md px-8 py-5 mt-10 shadow-lg">
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 text-white p-2 rounded-full hover:bg-gray-800/50 transition-all"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 text-white p-2 rounded-full hover:bg-gray-800/50 transition-all"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
