// import Image from "next/image";
// import { useMediaQuery } from "react-responsive";

// const Banner = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

// if (isMobile) {
//   return (
//     <div className="w-full h-[100px] m-0 p-0 flex items-center justify-center overflow-hidden">
//       <Image
//         src="/images/MobileBanner.png"
//         alt="Mobile Banner"
//         width={800}
//         height={220}
//         className="max-w-full max-h-full object-contain rounded-lg"
//         priority
//       />
//     </div>
//   );
// }


//   return (
//     <div className="w-full h-[150px] mt-4 px-4">
//       <Image
//         src="/images/banner.svg"
//         alt="Desktop Banner"
//         width={1920}
//         height={150}
//         className="w-full object-cover rounded-xl"
//         priority
//       />
//     </div>
//   );
// };

// export default Banner;

"use client"

import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const mainTextWords = ["Track", "•", "Rank", "•", "Dominate"]
  const subTextWords = [
    "All",
    "BGMI,",
    "Call",
    "of",
    "Duty",
    "&",
    "Indus",
    "Tournaments,",
    "Player",
    "rankings",
    "and",
    "game",
    "insights",
    "-",
    "Finally",
    "in",
    "one",
    "place",
  ]

  if (isMobile) {
    return (
      <div className="relative w-full h-[100px] m-0 pt-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/MobileBanner.png"
          alt="Mobile Banner"
          width={800}
          height={220}
          className="max-w-full max-h-full object-contain rounded-lg"
          priority
        />

        {/* Mobile Text Overlay */}
        <div className="absolute inset-0 flex flex-col px-2 pt-2">
          {/* Main Title */}
          <div className="flex flex-wrap gap-1 mb-1">
            {mainTextWords.map((word, index) => (
              <span
                key={index}
                className={`text-[#FF1ADF] font-bold text-sm transition-all duration-700 ease-out drop-shadow-lg ${
                  isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <div className="flex flex-wrap w-65 gap-1 text-xs">
            {subTextWords.map((word, index) => (
              <span
                key={index}
                className={`text-white-200 transition-all duration-700 ease-out drop-shadow-md ${
                  isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
                }`}
                style={{
                  transitionDelay: `${mainTextWords.length * 200 + index * 100}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-[roboto] relative w-full h-[150px] mt-4 px-4">
      <Image
        src="/images/banner.svg"
        alt="Desktop Banner"
        width={1920}
        height={150}
        className="w-full object-cover rounded-xl"
        priority
      />

      {/* Desktop Text Overlay */}
      <div className="absolute inset-0 flex flex-col  px-8">
        {/* Main Title */}
        <div className="flex  gap-3 mb-3">
          {mainTextWords.map((word, index) => (
            <span
              key={index}
              className={`text-[#FF1ADF] font-normal text-sm lg:text-lg transition-all duration-700 ease-out drop-shadow-lg ${
                isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-12"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <div className="flex flex-wrap gap-2 text-sm lg:text-lg max-w-4xl">
          {subTextWords.map((word, index) => (
            <span
              key={index}
              className={`text-gray-200 transition-all duration-700 ease-out drop-shadow-md ${
                isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-12"
              }`}
              style={{
                transitionDelay: `${mainTextWords.length * 200 + index * 100}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
