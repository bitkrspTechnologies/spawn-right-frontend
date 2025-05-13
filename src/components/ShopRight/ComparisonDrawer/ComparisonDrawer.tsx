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
      <DrawerContent className="w-full max-w-none h-[90vh] bg-black text-white border-t border-gray-700 rounded-t-2xl">
        <div className="mx-auto w-full max-w-7xl h-full flex flex-col">
          {/* Header Section */}
          <div className="p-6 pb-0">
            <DrawerHeader className="flex flex-col items-start p-0">
              <div className="flex justify-between w-full items-center mb-6">
                <DrawerTitle className="text-2xl font-bold">
                  Product Comparison
                </DrawerTitle>
                <DrawerClose asChild>
                  <ShadCnButton
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </ShadCnButton>
                </DrawerClose>
              </div>

              <div className="flex justify-between w-full items-center mb-8">
                <div>
                  <h3 className="text-lg font-medium">GAMING KEYBOARD</h3>
                  <p className="text-gray-400 text-sm">(MAZOR)</p>
                </div>
                <div className="text-xl font-bold">$200</div>
              </div>

              <div className="flex justify-between w-full items-center mb-8">
                <button className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  CLEAR ALL
                </button>
                <p className="text-gray-400 text-sm">
                  Select Up To 4 Products To Compare
                </p>
              </div>
            </DrawerHeader>
          </div>

          {/* Scrollable Product Comparison Area */}
          <div className="flex-1 overflow-y-auto px-6 pb-24">
            {" "}
            {/* Added pb-24 to prevent bottom content from being hidden */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {selectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 rounded-lg p-4 h-full"
                >
                  {/* Product card content */}
                  <div className="h-40 w-full bg-gray-700 rounded mb-3"></div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-400 text-sm">{product.brand}</p>
                  <div className="mt-2 font-bold">${product.price}</div>
                </div>
              ))}

              {Array.from({ length: 4 - selectedProducts.length }).map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center min-h-[250px]"
                  >
                    <span className="text-gray-500">+ Add Product</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Fixed Compare Button at Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-black p-4">
            <Button
              text="COMPARE"
              className="text-xl"
              // disabled={selectedProducts.length < 2}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
