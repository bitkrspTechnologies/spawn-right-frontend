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

export default function Shop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const productImages = [
    "/keyboard1.jpg",
    "/keyboard2.jpg",
    "/keyboard3.jpg",
    "/keyboard4.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const specifications = [
    "For Desktop, Laptop, Mac",
    "Case Material: ABS Plastic",
    "Size: Tenkeyless",
    "Interface: Wired USB",
    "Multimedia Key",
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-y-auto scrollbar-hide">
        <div
          className={`pt-20 fixed top-0 z-30 w-full shadow-md px-4 py-3 transition-all duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        ></div>
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
              <div className="p-2 md:p-4 bg-black text-white text-center my-4 md:my-8">
                <h1 className="text-sm md:text-xl font-bold uppercase">
                  Limited-Time Offer Get up to 30% off
                </h1>
              </div>

              <div className="relative w-full h-48 sm:h-64 md:h-96">
                <Image
                  src="/images/carousel/carousel-two.jpg"
                  alt="Product details"
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
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                    </div>
                    <span className="text-sm md:text-base">4.8</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-4 sm:mb-6">
                    88,888+ Trusted Customer Reviews
                  </p>
                </div>

                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 mt-2 md:mt-4">
                  GAMING KEYBOARD
                </h2>

                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                  A keyboard is the most imperative accessory for your computer.
                  Be it working on Excel sheets or gaming, a proper keyboard for
                  your needs is what you need to ...
                </p>

                <div className="flex flex-row gap-2 mb-4 md:mb-6">
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center">
                      <span className="font-bold text-sm md:text-base mr-1 md:mr-2">
                        • Unicam Hem
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-bold text-sm md:text-base mr-1 md:mr-2">
                        • Dragon Scale
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-bold text-sm md:text-base mr-1 md:mr-2">
                        • Genie Lamp
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2 md:mt-4">
                  <button
                    className={cn(
                      "py-3 md:py-5 px-3 md:px-5 text-xs border-2 font-medium rounded-sm",
                      "border-[#4D32AA] text-[#FF1ADF]",
                      "hover:border-[#9D0A88] transition-all"
                    )}
                  >
                    BUY NOW
                  </button>
                  <Button text="COMPARE" className="text-xs md:text-sm" />
                </div>

                <div className="space-y-3 p-2 md:p-3 mt-6 md:mt-10">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        Brand
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        Logitech
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        Compatible Devices
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        Laptop, PC, Tablet, Smartphone, Smart TV
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        Connectivity Technology
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        Wireless
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        Keyboard Description
                      </p>
                      <p className="font-medium text-sm md:text-base">
                        Media/Wireless
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <p className="text-gray-500 font-semibold w-32 text-sm md:text-base">
                        Recommended Uses
                      </p>
                      <p className="font-medium text-sm md:text-base">Office</p>
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <p className="text-gray-500 font-semibold text-sm md:text-base">
                      Performance
                    </p>
                    <p className="font-medium mt-1 text-sm md:text-base">
                      Powered by
                    </p>
                  </div>
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
                            {spec}
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
                    <li>
                      <span className="font-medium">Media Friendly:</span> The
                      K4DD Plus wireless touch TV keyboard gives you integrated,
                      comfortable control of your PC-to-TV entertainment,
                      eliminating the clutter of a separate keyboard and mouse.
                    </li>
                    <li>
                      <span className="font-medium">Plug-and Play:</span> Simply
                      plug the Unifying receiver into a USB port and the
                      wireless touchpad keyboard is ready to go, adjust controls
                      using the Logitech Options Software to save preferred
                      settings.
                    </li>
                    <li>
                      <span className="font-medium">Power-Packed:</span> Built
                      with laid-back control in mind, this wireless TV keyboard
                      has a reliable and long battery life of up to 18 months
                      (2), including an on/off button to help it go even longer.
                    </li>
                    <li>
                      <span className="font-medium">Wireless Freedom:</span>{" "}
                      Designed for seamless comfort and control, this HTPC
                      keyboard boasts a range of up to 35 ft (1) wireless
                      connectivity, with quiet keys and a large touchpad for
                      easy navigation.
                    </li>
                    <li>
                      <span className="font-medium">Broad Compatibility:</span>{" "}
                      Designed for use with Windows 7, Windows & Windows 10 and
                      later, Android 7 or later, and Chrome OS
                    </li>
                    <li>
                      <span className="font-medium">Durable and Reliable:</span>{" "}
                      The split resistant design (6) and long-lasting keys keep
                      you on-track despite any mishaps
                    </li>
                    <li>
                      <span className="font-medium">
                        Upgrade to Logitech KB30 Keyboard:
                      </span>{" "}
                      For increased comfort, illuminated keys, USB Bluetooth
                      connectivity and a rechargeable battery by the KB30
                      wireless keyboard.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={`${
                  isMobile ? "px-2" : "px-10"
                } mt-6 md:mt-8 mb-4 md:mb-6 text-sm md:text-base`}
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">
                  SIMILAR PRODUCTS
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                <ProductShowcase />
                <div className="mt-6 md:mt-10 flex justify-center">
                  <Link href="/shop">
                    <Button
                      text="Show More"
                      className="py-3 md:py-4 text-sm md:text-base"
                    />
                  </Link>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <ProductReviews />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
