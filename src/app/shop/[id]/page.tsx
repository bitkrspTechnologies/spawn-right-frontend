"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import ProductShowcase from "@/components/ShopRight/ProductShowcase/ProductShowcase";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import Button from "@/components/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProductReviews from "@/components/ShopRight/ProductReviews/ProductReviews";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";

export default function Shop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const productId = params?.id;

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5090/api/v1/products/get-single-shop-right-products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const infot = await response.json();
        setProduct(infot.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductData();
    }
  }, [productId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = () => {
    if (!product?.product_photo) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("pro", product);

  const prevImage = () => {
    if (!product?.product_photo) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const productImages = product?.product_photos;

  const specifications = [
    { label: "Colour", value: product?.product_information["Colour"] },
    {
      label: "Country of Origin",
      value: product?.product_information["Country of Origin"],
    },
    {
      label: "Generic Name",
      value: product?.product_information["Generic Name"],
    },
    {
      label: "Item Weight",
      value: product?.product_information["Item Weight"],
    },
    {
      label: "Manufacturer",
      value: product?.product_information["Manufacturer"],
    },
  ];

  const validSpecifications = specifications.filter((spec) => spec.value);

  const productDetails = [
    { label: "Brand", value: product?.product_details?.["Brand"] },
    {
      label: "Compatible Devices",
      value: product?.product_details?.["Compatible Devices"],
    },
    {
      label: "Connectivity Technology",
      value: product?.product_details?.["Connectivity Technology"],
    },
    {
      label: "Controller Type",
      value: product?.product_details?.["Controller Type"],
    },
    { label: "Model Name", value: product?.product_details?.["Model Name"] },
  ].filter((item) => item.value);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide">
        {!isMobile && (
          <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
            <div className="bg-gray-400 h-[calc(50%-1rem)] rounded-lg p-4 flex flex-col"></div>
            <div className="bg-gray-400 h-[calc(50%-.3rem)] rounded-lg p-4 flex flex-col"></div>
          </div>
        )}
        <div
          className={`pt-16 pb-20 ${isMobile ? "px-4" : "pr-[350px] pl-5"}`}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className="space-y-8">
            <div className="w-full max-w-6xl mx-auto rounded-lg shadow-md overflow-hidden">
              {product.product_original_price && (
                <div className="p-2 md:p-4 bg-black text-white text-center my-4 md:my-8">
                  <h1 className="text-sm md:text-xl font-bold uppercase">
                    Grab the Offer Now!!{"  "}
                    {product.discount_percentage || "Get the Maximum Discount"}
                  </h1>
                </div>
              )}

              <div className="relative w-full h-48 sm:h-64 md:h-96">
                <Image
                  src={productImages[currentImageIndex]}
                  alt={product.product_title || "Product details"}
                  className="w-full h-full object-contain rounded-sm"
                  priority
                  width={1920}
                  height={1000}
                />

                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-1 md:gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                        currentImageIndex === index
                          ? "bg-purple-600"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <div className="flex flex-row gap-2 items-center text-white mb-2 sm:mb-6">
                    <div className="flex flex-row">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            i <
                            Math.floor(
                              parseFloat(product.product_star_rating || "4.8")
                            )
                              ? "fill-white"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm md:text-base">
                      {product.product_star_rating || "4.8"}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-4 sm:mb-6">
                    {product.product_num_ratings
                      ? `${product.product_num_ratings.toLocaleString()}+`
                      : "88,888+"}{" "}
                    Trusted Customer Reviews
                  </p>
                </div>

                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 mt-2 md:mt-4">
                  {product.product_title}
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  {product.product_price && (
                    <span className="text-2xl font-bold text-purple-500">
                      ₹{product.product_price}
                    </span>
                  )}
                  {product.product_original_price && (
                    <span className="text-lg line-through text-gray-400">
                      {product.product_original_price}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                  {product?.product_description}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-2 md:mt-4">
                  <a
                    href={product?.product_url}
                    target="_blank"
                    className={cn(
                      "py-3 md:py-5 px-3 md:px-5 text-xs border-2 font-medium rounded-sm text-center",
                      "border-[#4D32AA] text-[#FF1ADF]",
                      "hover:border-[#9D0A88] transition-all"
                    )}
                  >
                    BUY NOW
                  </a>
                  <Button text="COMPARE" className="text-xs md:text-sm" />
                </div>

                <div className="space-y-2 md:space-y-3 mt-10">
                  {productDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        {detail.label}
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-start my-8 md:my-16">
                  <div className="w-full max-w-2xl">
                    <ul className="space-y-3 md:space-y-6">
                      {validSpecifications.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 rounded-full bg-pink-600 flex items-center justify-center mr-2 md:mr-4">
                            <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                          </div>
                          <span className="text-white text-sm md:text-lg">
                            <span className="font-semibold">
                              {spec.label}:{" "}
                            </span>
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="my-6 md:my-8">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                    About this item
                  </h3>
                  <ul className="space-y-2 md:space-y-3 list-disc pl-4 md:pl-5 text-sm md:text-base">
                    {product.about_product ? (
                      product.about_product.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>
                          <span className="font-medium">Media Friendly:</span>{" "}
                          The wireless touch TV keyboard gives you integrated,
                          comfortable control of your PC-to-TV entertainment.
                        </li>
                        <li>
                          <span className="font-medium">Plug-and Play:</span>{" "}
                          Simply plug the receiver into a USB port and the
                          device is ready to go.
                        </li>
                        <li>
                          <span className="font-medium">Power-Packed:</span>{" "}
                          Built with reliable and long battery life.
                        </li>
                        <li>
                          <span className="font-medium">Wireless Freedom:</span>{" "}
                          Designed for seamless comfort and control.
                        </li>
                        <li>
                          <span className="font-medium">
                            Broad Compatibility:
                          </span>{" "}
                          Designed for use with multiple operating systems.
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 mb-24">
            {product?.customers_say && (
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                What Customers Say
              </h3>
            )}

            {product?.customers_say && (
              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg">
                <p className="text-sm md:text-base italic">
                  "{product.customers_say}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
