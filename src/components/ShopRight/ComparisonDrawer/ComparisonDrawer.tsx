"use client";

import * as React from "react";
import { Star, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button as ShadCnButton } from "@/components/ui/button";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

interface Product {
  asin: string;
  product_title: string;
  brand: string;
  product_price: string;
  product_photo: string;
  product_star_rating?: string;
  product_num_ratings?: string;
}

interface ComparisonDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ComparisonDrawer({
  open,
  onOpenChange,
}: ComparisonDrawerProps) {
  const [selectedProducts, setSelectedProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (open) {
      const products = JSON.parse(
        localStorage.getItem("compareProducts") || "[]"
      );
      setSelectedProducts(products);
    }
  }, [open]);

  const removeProduct = (asin: string) => {
    const updatedProducts = selectedProducts.filter((p) => p.asin !== asin);
    setSelectedProducts(updatedProducts);
    localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
  };

  const clearAll = () => {
    setSelectedProducts([]);
    localStorage.removeItem("compareProducts");
  };

  const handleCompareAll = () => {
    console.log("Comparing products:", selectedProducts);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="w-full max-w-none h-[60vh] bg-black text-white border-t border-gray-700 rounded-t-2xl">
        <div className="mx-auto w-full max-w-7xl h-full flex flex-col">
          <div className="p-4 pb-0">
            <DrawerHeader className="flex flex-col items-start p-0">
              <div className="flex justify-between w-full items-center mb-2">
                <DrawerTitle className="text-lg font-bold">
                  Product Comparison
                </DrawerTitle>
                <div className="flex items-center gap-2">
                  {selectedProducts.length > 0 && (
                    <Link href={"/shop/compare-all"}>
                      <Button
                        text="COMPARE ALL"
                        className="text-sm px-3 py-1"
                        // disabled={selectedProducts.length < 2}
                        onClick={handleCompareAll}
                      />
                    </Link>
                  )}

                  <DrawerClose asChild>
                    <ShadCnButton
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white h-8 w-8"
                    >
                      <X className="h-3 w-3" />
                    </ShadCnButton>
                  </DrawerClose>
                </div>
              </div>

              <div className="flex justify-between w-full items-center mb-3">
                <button
                  onClick={clearAll}
                  className="text-purple-500 hover:text-purple-400 text-xs font-medium flex items-center"
                  disabled={selectedProducts.length === 0}
                >
                  <X className="h-3 w-3 mr-1" />
                  CLEAR ALL
                </button>
                <p className="text-gray-400 text-xs">
                  {selectedProducts.length} of 4 products selected
                </p>
              </div>
            </DrawerHeader>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {selectedProducts.map((product) => (
                <div
                  key={product.asin}
                  className="bg-gray-900 rounded-lg p-3 h-full flex flex-col relative group"
                >
                  <button
                    onClick={() => removeProduct(product.asin)}
                    className="absolute z-40 top-0 right-0 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShadCnButton
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white h-8 w-8"
                    >
                      <X className="h-3 w-3" />
                    </ShadCnButton>
                  </button>
                  <div className="h-32 w-full bg-gray-700 rounded mb-2 flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={product.product_photo}
                      alt={product.product_title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-sm line-clamp-2">
                      {product.product_title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {product.brand}
                    </p>
                    <div className="mt-2 font-bold text-sm">
                      {product.product_price}
                    </div>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-300">
                        {product.product_star_rating || "N/A"} (
                        {product.product_num_ratings || "0"})
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {Array.from({ length: 4 - selectedProducts.length }).map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center min-h-[200px] hover:bg-gray-800/70 transition-colors cursor-pointer"
                    onClick={() => onOpenChange(false)}
                  >
                    <span className="text-gray-500 text-xs">+ Add Product</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
