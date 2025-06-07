"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductSkeleton } from "@/components/Skeleton/ProductSkeleton";
import ProductCard from "./ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getShopProducts, fetchSearchedProducts } from "@/services/Product";

const ProductShowcase = ({ categoryId, searchQuery }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: productsInfo,
    isLoading,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["shop-right-products", page, categoryId, searchQuery],
    queryFn: () =>
      searchQuery
        ? fetchSearchedProducts(page, searchQuery)
        : getShopProducts(page, categoryId),
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    if (productsInfo?.data?.data?.products) {
      if (productsInfo.data.data.products.length === 0 && page > 1) {
        setHasMore(false);
        setTotalPages(page - 1);
      }
    }
  }, [productsInfo, page]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, categoryId]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      let start = Math.max(1, page - 2);
      let end = Math.min(totalPages, page + 2);

      if (page <= 3) {
        end = maxVisiblePages;
      } else if (page >= totalPages - 2) {
        start = totalPages - maxVisiblePages + 1;
      }

      for (let i = start; i <= end; i++) {
        visiblePages.push(i);
      }
    }
    return visiblePages;
  };

  if (isError) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4 text-center text-red-300">
        UnExpected Error Occurred....We While Back Again
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsInfo?.data?.data?.products?.map((product) => (
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

        {/* Pagination */}
        {!isLoading && productsInfo?.data?.data?.products?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page - 1);
                    }}
                  />
                </PaginationItem>

                {getVisiblePages().map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {totalPages > 5 && page < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {!isLoading &&
          !isFetching &&
          productsInfo?.data?.data?.products?.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              {page === 1 ? "No products found" : "No more products available"}
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductShowcase;