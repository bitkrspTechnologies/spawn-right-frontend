"use client";

import * as React from "react";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button as ShadCnButton } from "@/components/ui/button";
import Button from "@/components/Button/Button";

interface ComparisonDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProducts: Product[];
}

export function ComparisonDrawer({
  open,
  onOpenChange,
  selectedProducts = [],
}: ComparisonDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="w-full max-w-none h-[50vh] bg-black text-white border-t border-gray-700 rounded-t-2xl">
        <div className="mx-auto w-full max-w-7xl h-full flex flex-col">
          {/* Compact Header Section */}
          <div className="p-4 pb-0">
            <DrawerHeader className="flex flex-col items-start p-0">
              <div className="flex justify-between w-full items-center mb-2">
                <DrawerTitle className="text-lg font-bold">
                  Product Comparison
                </DrawerTitle>
                <div className="flex items-center gap-2">
                  <Button
                    text="COMPARE"
                    className="text-sm px-3 py-1"
                    disabled={selectedProducts.length < 2}
                  />
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

              <div className="flex justify-between w-full items-center mb-2">
                <div>
                  <h3 className="text-sm font-medium">GAMING KEYBOARD</h3>
                  <p className="text-gray-400 text-xs">(MAZOR)</p>
                </div>
                <div className="text-base font-bold">$200</div>
              </div>

              <div className="flex justify-between w-full items-center mb-3">
                <button className="text-purple-500 hover:text-purple-400 text-xs font-medium flex items-center">
                  <X className="h-3 w-3 mr-1" />
                  CLEAR ALL
                </button>
                <p className="text-gray-400 text-xs">
                  {selectedProducts.length} of 4 products selected
                </p>
              </div>
            </DrawerHeader>
          </div>

          {/* Optimized Product Comparison Area */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {selectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 rounded-lg p-3 h-full flex flex-col"
                >
                  <div className="h-24 w-full bg-gray-700 rounded mb-2 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-sm line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {product.brand}
                    </p>
                    <div className="mt-2 font-bold text-sm">
                      ${product.price}
                    </div>
                  </div>
                </div>
              ))}

              {Array.from({ length: 4 - selectedProducts.length }).map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center min-h-[180px]"
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
