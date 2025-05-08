"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] duration-300">
      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        <Image
          src="/images/gamecarousel/valorant.jpg"
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-900 uppercase">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        </div>

        <div className="mt-2">
          <span className="text-lg font-bold">₹{product.price}</span>
        </div>

        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs ml-1 font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            className={cn(
              "py-2 text-xs font-medium rounded-md",
              "bg-blue-600 text-white",
              "hover:bg-blue-700 transition-all"
            )}
          >
            BUY NOW
          </button>
          <button
            className={cn(
              "py-2 text-xs font-medium rounded-md",
              "bg-white text-blue-600 border border-blue-600",
              "hover:bg-blue-50 transition-all"
            )}
          >
            COMPARE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
