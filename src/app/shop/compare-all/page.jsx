"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { X, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CompareAll() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);

  useEffect(() => {
    // Load products from localStorage when component mounts
    const products = JSON.parse(
      localStorage.getItem("compareProducts") || "[]"
    );
    setSelectedProducts(products);
    prepareComparisonData(products);
  }, []);

  const prepareComparisonData = (products) => {
    if (products.length === 0) return;
    const firstProduct = products[0];
    const allFields = Object.keys(firstProduct).filter(
      (key) => !["product_photo", "product_url"].includes(key)
    );

    const data = allFields.map((field) => ({
      feature: field
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      key: field,
      values: products.map((product) => product[field] || "--"),
      highlighted: [
        "product_price",
        "product_star_rating",
        "brand",
        "product_title",
      ].includes(field),
    }));

    setComparisonData(data);
  };

  const removeProduct = (asin) => {
    const updatedProducts = selectedProducts.filter((p) => p.asin !== asin);
    setSelectedProducts(updatedProducts);
    localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
    prepareComparisonData(updatedProducts);
  };

  const clearAll = () => {
    setSelectedProducts([]);
    setComparisonData([]);
    localStorage.removeItem("compareProducts");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide bg-gray-950">
        {!isMobile && (
          <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
            <div className="bg-gray-400 h-[calc(50%-1rem)] rounded-lg p-4 flex flex-col"></div>
            <div className="bg-gray-400 h-[calc(50%-.3rem)] rounded-lg p-4 flex flex-col"></div>
          </div>
        )}
        <div
          className={`pt-16 pb-20 ${isMobile ? "px-4" : "pr-[350px] pl-5"}`}
          style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className={`w-full h-[100px] mt-4 ${isMobile ? "" : "px-6"}`}>
            <Image
              src="/images/ShopRightBanner.png"
              alt="ShopRight Banner"
              width={1920}
              height={250}
              className="object-cover rounded-xl w-full h-full"
              priority
            />
          </div>

          <div
            className={`flex-1 overflow-y-auto px-4 pb-4 ${isMobile ? "" : "px-6"
              }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {selectedProducts.map((product) => (
                <div
                  key={product.asin}
                  className="bg-gray-900 rounded-lg p-3 h-full flex flex-col relative group"
                >
                  <button
                    onClick={() => removeProduct(product.asin)}
                    className="absolute z-40 top-0 right-0 text-gray-400 hover:text-white opacity-100 transition-opacity"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white h-8 w-8"
                    >
                      <X className="h-3 w-3" />
                    </Button>
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
                      <Star className="h-3 w-3 fill-white text-white mr-1" />
                      <span className="text-xs text-gray-300">
                        {product.product_star_rating || "N/A"} (
                        {product.product_num_ratings || "0"})
                      </span>
                    </div>
                  </div>
                  <a
                    href={product.product_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "py-2 mt-4 text-xs border-2 font-medium rounded-sm text-center",
                      "border-[#4D32AA] text-[#FF1ADF]",
                      "hover:border-[#9D0A88] transition-all"
                    )}
                  >
                    BUY NOW
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedProducts.length > 0 && (
            <div
              className={`bg-white rounded-lg overflow-hidden ${isMobile ? "" : "mx-6"
                }`}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="w-1/4 px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Features
                      </th>
                      {selectedProducts.map((product, index) => (
                        <th
                          key={index}
                          className="px-4 py-3 text-left text-sm font-medium text-gray-700"
                        >
                          Product {index + 1}
                        </th>
                      ))}
                      {Array.from({ length: 4 - selectedProducts.length }).map(
                        (_, i) => (
                          <th
                            key={`empty-th-${i}`}
                            className="px-4 py-3 text-left text-sm font-medium text-gray-700"
                          >
                            --
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((row, index) => (
                      <>
                        <tr
                          key={index}
                          className={`${row.highlighted ? "bg-blue-50" : "bg-white"
                            } cursor-pointer`}
                          onClick={() => isMobile && toggleRow(index)}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            <div className="flex items-center justify-between">
                              {row.feature}
                              {isMobile &&
                                (expandedRows[index] ? (
                                  <ChevronUp size={16} />
                                ) : (
                                  <ChevronDown size={16} />
                                ))}
                            </div>
                          </td>
                          {(!isMobile || expandedRows[index]) &&
                            row.values.map((value, i) => (
                              <td
                                key={i}
                                className="px-4 py-3 text-sm text-gray-700"
                              >
                                {value || "--"}
                              </td>
                            ))}
                          {isMobile &&
                            !expandedRows[index] &&
                            row.values.slice(0, 1).map((_, i) => (
                              <td
                                key={i}
                                className="px-4 py-3 text-sm text-gray-700"
                              >
                                ...
                              </td>
                            ))}
                          {/* Fill remaining columns if less than 4 products */}
                          {Array.from({ length: 4 - row.values.length }).map(
                            (_, i) => (
                              <td
                                key={`empty-td-${i}`}
                                className="px-4 py-3 text-sm text-gray-700"
                              >
                                --
                              </td>
                            )
                          )}
                        </tr>
                        {isMobile && expandedRows[index] && (
                          <tr className="bg-gray-50">
                            <td
                              colSpan={5}
                              className="px-4 py-2 text-xs text-gray-500"
                            >
                              Detailed comparison shown
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedProducts.length === 0 && (
            <div className={`text-center py-10 ${isMobile ? "" : "px-6"}`}>
              <h3 className="text-lg font-medium text-white mb-2">
                No products selected for comparison
              </h3>
              <p className="text-gray-400">
                Add products to compare from the product pages
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
