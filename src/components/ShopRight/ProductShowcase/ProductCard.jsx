"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn, createAffiliateLink } from "@/lib/utils";
import Button from "../../Button/Button";
import { ComparisonDrawer } from "../ComparisonDrawer/ComparisonDrawer";
import Link from "next/link";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "@/services/Product";

const ProductCard = ({ product }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const {
    data: fullProduct,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ['product', product.asin],
    queryFn: () => getSingleProduct(product.asin),
    enabled: false,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    onError: () => {
      toast.error("Failed to fetch product details");
    }
  });

  const handleCompareClick = async () => {
    try {
      const { data } = await refetch();
      if (!data) throw new Error("No product data");
      const productToAdd = data?.data?.data;

      const existingProducts = JSON.parse(
        localStorage.getItem("compareProducts") || "[]"
      );
      const isAlreadyAdded = existingProducts.some(
        (p) => p.asin === productToAdd?.asin
      );

      const hasExistingProducts = existingProducts.length > 0;
      const productCategory = productToAdd.category.id;

      console.log("productCategory", productCategory);
      const allSameCategory = hasExistingProducts
        ? existingProducts.every(p => p.category.id === productCategory)
        : true;

      if (isAlreadyAdded) {
        toast.info("Product already in comparison");
        setIsDrawerOpen(true);
        return;
      }

      if (!allSameCategory) {
        toast.error("You can only compare products from the same category");
        setIsDrawerOpen(true);
        return;
      }

      if (existingProducts.length >= 4) {
        toast.error("You can compare maximum 4 products at a time");
        setIsDrawerOpen(true);
        return;
      }

      if (!isAlreadyAdded) {
        if (existingProducts.length < 4) {
          const updatedProducts = [...existingProducts, productToAdd];
          localStorage.setItem(
            "compareProducts",
            JSON.stringify(updatedProducts)
          );
          setIsDrawerOpen(true);
        } else {
          toast.error("You can compare maximum 4 products at a time");
          setIsDrawerOpen(true);
        }
      } else {
        toast.info("Product already in comparison");
        setIsDrawerOpen(true);
      }
    } catch (error) {
      console.error("Error in comparison:", error);
      toast.error("Failed to add product for comparison");
    }
  };

  return (
    <>
      <div className="relative h-full w-full bg-white rounded-lg overflow-hidden flex flex-col border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] duration-300">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(145%_145%_at_50%_10%,rgba(255,255,255,0)_20%,rgba(223,171,255,1)_100%)]"></div>

        <div className="relative z-10">
          <Link href={`/shop/${product?.asin}`}>
            <div className="relative h-36 w-full overflow-hidden rounded-lg">
              <Image
                src={product?.product_photo}
                alt={product?.product_title}
                fill
                className="object-contain p-4 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-[#402000] uppercase truncate">
                  {product?.product_title}
                </h3>
                <p className="text-xs text-[#402000]">{product.brand}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="mt-2">
                <span className="text-lg font-bold text-[#402000]">
                  {product?.product_price}
                </span>
                {product?.product_original_price && (
                  <div className="text-[#402000] text-xs px-2 py-1 rounded line-through">
                    {product?.product_original_price}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center mt-1">
                <div className="flex items-center border border-[#4D32AA] p-2 px-6 rounded-sm">
                  <Star className="h-3 w-3 fill-[#402000] text-[#402000]" />
                  <span className="text-xs ml-1 font-medium text-[#402000]">
                    {product?.product_star_rating || "N/A"}
                  </span>
                </div>
                <span className="text-xs text-[#503000] mt-1">
                  ({product?.product_num_ratings || "0"} reviews)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <a
                href={createAffiliateLink(product?.product_url || "#")}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "py-2 text-xs border-2 font-medium rounded-sm text-center",
                  "border-[#4D32AA] text-[#FF1ADF]",
                  "hover:border-[#9D0A88] transition-all"
                )}
              >
                BUY NOW
              </a>
              <Button
                text={isFetching ? "ADDING..." : "COMPARE"}
                onClick={handleCompareClick}
                className="cursor-pointer"
                disabled={isFetching}
              />
            </div>
          </div>
        </div>
      </div>

      <ComparisonDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </>
  );
};

export default ProductCard;