"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/products";
import Button from "../Button/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative h-full w-full bg-[#ffffff] rounded-lg overflow-hidden flex flex-col border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] duration-300">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_20%,rgba(223,171,255,1)_100%)]"></div>

      <div className="relative z-10">
        {/* Image Section */}
        <div className="relative h-40 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/gamecarousel/valorant.jpg"
            alt={product.name}
            fill
            className="object-cover p-4 rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-[#402000] uppercase">
                {product.name}
              </h3>
              <p className="text-xs text-[#402000]">{product.brand}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="mt-2">
              <span className="text-lg font-bold text-[#402000]">
                ₹{product.price}
              </span>
              <div className="text-[#402000] text-xs px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            </div>

            <div className="flex flex-col items-center mt-1">
              <div className="flex items-center border border-[#4D32AA] p-2 px-6 rounded-sm">
                <Star className="h-3 w-3 fill-[#402000] text-[#402000]" />
                <span className="text-xs ml-1 font-medium text-[#402000]">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-[#503000] mt-1">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              className={cn(
                "py-2 text-xs border-2 font-medium rounded-sm",
                "border-[#4D32AA] text-[#FF1ADF]",
                "hover:border-[#9D0A88] transition-all"
              )}
            >
              BUY NOW
            </button>
            <Button text="COMPARE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
