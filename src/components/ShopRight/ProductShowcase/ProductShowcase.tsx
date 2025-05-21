"use client";

import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductSkeleton } from "@/components/Skeleton/ProductSkeleton";
import ProductCard from "./ProductCard";

const ProductShowcase = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // API fetch function
  const fetchProducts = async (page = 1) => {
    try {
      const response = await fetch(
        `http://localhost:5090/api/v1/products/get-all-shop-right-products/${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const {
    data: productsInfo,
    isLoading,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["shop-right-products", page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  // Reset products when page is reset to 1
  useEffect(() => {
    if (page === 1) {
      setAllProducts([]);
    }
  }, [page]);

  // Merge new products with existing ones
  useEffect(() => {
    if (productsInfo?.data?.data?.products) {
      setAllProducts((prev) => {
        const productMap = new Map();
        prev.forEach((product) => productMap.set(product.asin, product));
        productsInfo.data.data.products.forEach((product) => {
          productMap.set(product.asin, product);
        });

        return Array.from(productMap.values());
      });
      setHasMore(productsInfo.data.data.products.length > 0);
    }
  }, [productsInfo]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isFetching) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isFetching]);

  if (isError) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4 text-center text-red-500">
        Error: {error.message}
        <button
          onClick={() => setPage(1)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white/10 backdrop-blur-md px-8 py-5 mt-10 shadow-lg">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allProducts.map((product) => (
            <ProductCard
              key={`${product.asin}-${product.product_id}`}
              product={product}
            />
          ))}

          {(isLoading || isFetching) &&
            Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
        </div>

        {/* Infinite scroll trigger */}
        <div ref={loaderRef} className="h-10 w-full" />

        {!hasMore && allProducts.length > 0 && (
          <div className="text-center py-6 text-gray-400">
            You've reached the end of products
          </div>
        )}

        {!hasMore && allProducts.length === 0 && !isLoading && (
          <div className="text-center py-6 text-gray-400">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductShowcase;
