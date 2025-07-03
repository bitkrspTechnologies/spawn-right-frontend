"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import { cn, createAffiliateLink } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import ProductDetailSkeleton from "@/components/Skeleton/ProductDetailSkeleton";
import { getSingleProduct } from "@/services/Product";
import { useQuery } from "@tanstack/react-query";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Button from "@/components/Button/Button";

export default function Shop() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const params = useParams();
  const productId = params?.id;

  const {
    data: product,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getSingleProduct(productId).then(res => res.data.data),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });

  const nextImage = () => {
    if (!product?.product_photo) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!product?.product_photo) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const productImages = product?.product_photos || [];

  const getCommonSpecifications = () => {
    const commonSpecs = [
      { label: "Brand", value: product?.product_details?.["Brand"] },
      { label: "Colour", value: product?.product_information?.["Colour"] },
      {
        label: "Country of Origin",
        value: product?.product_information?.["Country of Origin"],
      },
      {
        label: "Item Weight",
        value: product?.product_information?.["Item Weight"],
      },
      {
        label: "Manufacturer",
        value: product?.product_information?.["Manufacturer"],
      },
    ].filter(spec => spec.value);

    return commonSpecs;
  };

  const getProductSpecificSpecifications = () => {
    if (!product?.category?.name) return [];

    const category = product.category.name.toLowerCase();

    if (category.includes('phone') || category.includes('smartphone')) {
      return [
        { label: "Operating System", value: product?.product_details?.["Operating System"] },
        { label: "RAM", value: product?.product_details?.["RAM Memory Installed Size"] },
        { label: "Storage", value: product?.product_information?.["Memory Storage Capacity"] },
        { label: "Battery", value: product?.product_information?.["Battery Power Rating"] },
        { label: "Screen Size", value: product?.product_information?.["Display Size"] },
      ].filter(spec => spec.value);
    }

    if (category.includes('keyboard')) {
      return [
        { label: "Keyboard Type", value: product?.product_details?.["Keyboard Type"] },
        { label: "Connectivity", value: product?.product_details?.["Connectivity Technology"] },
        { label: "Layout", value: product?.product_details?.["Keyboard Layout"] },
        { label: "Backlit", value: product?.product_details?.["Backlit"] },
      ].filter(spec => spec.value);
    }

    if (category.includes('mouse')) {
      return [
        { label: "Tracking Method", value: product?.product_details?.["Tracking Method"] },
        { label: "Movement Detection", value: product?.product_details?.["Movement Detection"] },
        { label: "Buttons", value: product?.product_details?.["Number of Buttons"] },
        { label: "Hand Orientation", value: product?.product_details?.["Hand Orientation"] },
      ].filter(spec => spec.value);
    }

    // Default case for other categories
    return Object.entries(product?.product_details || {})
      .filter(([key]) => !['Brand'].includes(key))
      .slice(0, 5)
      .map(([key, value]) => ({ label: key, value }));
  };

  const specifications = [
    ...getCommonSpecifications(),
    ...getProductSpecificSpecifications()
  ];

  const renderProductSpecificFeatures = () => {
    if (!product?.category?.name) return null;

    const category = product.category.name.toLowerCase();

    if (category.includes('phone') || category.includes('smartphone')) {
      return (
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Phone Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Camera", value: product?.product_information?.["Camera"] || "Not specified" },
              { label: "Processor", value: product?.product_details?.["CPU Model"] || "Not specified" },
              { label: "SIM Type", value: product?.product_information?.["SIM Type"] || "Not specified" },
              { label: "Water Resistance", value: product?.product_information?.["Water Resistance"] || "Not specified" },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-3 rounded">
                <p className="text-sm text-gray-400">{feature.label}</p>
                <p className="font-medium">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (category.includes('keyboard')) {
      return (
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Keyboard Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Switch Type", value: product?.product_details?.["Switch Type"] || "Not specified" },
              { label: "Key Rollover", value: product?.product_details?.["Key Rollover"] || "Not specified" },
              { label: "Wrist Rest", value: product?.product_details?.["Wrist Rest"] ? "Yes" : "No" },
              { label: "Cable Length", value: product?.product_information?.["Cable Length"] || "Not specified" },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-3 rounded">
                <p className="text-sm text-gray-400">{feature.label}</p>
                <p className="font-medium">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (category.includes('mouse')) {
      return (
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Mouse Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "DPI", value: product?.product_details?.["DPI"] || "Not specified" },
              { label: "Polling Rate", value: product?.product_details?.["Polling Rate"] || "Not specified" },
              { label: "Weight", value: product?.product_information?.["Item Weight"] || "Not specified" },
              { label: "Ergonomic", value: product?.product_details?.["Ergonomic"] ? "Yes" : "No" },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-3 rounded">
                <p className="text-sm text-gray-400">{feature.label}</p>
                <p className="font-medium">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4 text-center text-red-300 mt-10">
        UnExpected Error Occured....We While Back Again
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
        <div className="fixed mt-10 right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 z-10">
          <AdForLeaderBoard />
          <AdForLeaderBoard />
        </div>
        <div
          className="py-16 pr-[350px]"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <div className="space-y-8 px-5">
            <div className="w-full max-w-6xl mx-auto overflow-hidden">
              {product.product_original_price && (
                <div className="p-2 md:p-4 bg-black text-white text-center my-4 md:my-8">
                  <h1 className="glitch text-sm md:text-xl font-bold uppercase" data-glitch="Grab the Offer Now!! Get the Maximum Discount" >
                    Grab the Offer Now!!{"  "}
                    {product.discount_percentage || "Get the Maximum Discount"}
                  </h1>
                </div>
              )}

              <div className="relative w-full h-48 sm:h-64 md:h-96">
                <div className="w-full h-full">
                  <Image
                    src={productImages[currentImageIndex]}
                    alt={product.product_title || "Product details"}
                    className="w-full h-full object-contain rounded-md bg-black/60"
                    priority
                    width={1920}
                    height={1000}
                  />
                </div>

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
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentImageIndex === index
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
                          className={`w-4 h-4 md:w-5 md:h-5 ${i <
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

                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 mt-2 md:mt-4">
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
                    href={createAffiliateLink(product?.product_url)}
                    target="_blank"
                    className={cn(
                      "py-3 md:py-5 px-3 md:px-5 text-xs border-2 font-medium rounded-sm text-center w-full",
                      "border-[#4D32AA] text-[#FF1ADF]",
                      "hover:border-[#d3a6cc] transition-all"
                    )}
                  >
                    BUY NOW
                  </a>

                  {/* <Button text="COMPARE" /> */}
                </div>

                <div className="space-y-2 md:space-y-3 mt-10">
                  {specifications.slice(0, 5).map((detail, index) => (
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
                      {specifications.map((spec, index) => (
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

                    {renderProductSpecificFeatures()}

                    {product?.sales_volume && (
                      <div className="mt-6 bg-green-900/30 p-4 rounded-lg">
                        <p className="font-medium text-green-400">
                          {product.sales_volume}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* {product?.delivery && (
                  <div className="my-4 p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="text-md font-semibold mb-2">Delivery Information</h4>
                    <p>{product.delivery}</p>
                    {product?.primary_delivery_time && (
                      <p className="mt-2 text-purple-400">
                        Estimated delivery: {product.primary_delivery_time}
                      </p>
                    )}
                  </div>
                )} */}

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

                {/* {product?.category_path?.length > 0 && (
                  <div className="text-sm text-gray-400 mt-4">
                    <span>Category: </span>
                    {product.category_path.map((cat, index) => (
                      <span key={cat.id}>
                        {index > 0 && ' > '}
                        <a href={cat.link} className="hover:text-purple-400">
                          {cat.name}
                        </a>
                      </span>
                    ))}
                  </div>
                )} */}

                {product?.all_product_variations && Object.keys(product.all_product_variations).length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-md font-semibold mb-3">Available Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(product.all_product_variations).map(([asin, variant]) => (
                        <div key={asin} className="bg-gray-800/50 p-3 rounded-lg">
                          <p className="text-sm">
                            {Object.entries(variant).map(([key, value]) => (
                              <span key={key} className="block capitalize">
                                {key}: <span className="font-medium">{value}</span>
                              </span>
                            ))}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="my-8">
                {product?.customers_say && (
                  <h3 className="text-lg md:text-xl ml-5 font-bold mb-2 md:mb-4">
                    What Customers Say
                  </h3>
                )}

                {product?.customers_say && (
                  <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg mb-10">
                    <p className="text-sm md:text-base italic">
                      "{product.customers_say}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}