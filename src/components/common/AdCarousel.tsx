// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const adSlides = [
//   {
//     title: 'Remove all ads',
//     description:
//       'Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new. Discord role.',
//   },
//   {
//     title: 'Support Us',
//     description: 'Become a supporter and enjoy exclusive rewards and early access to features.',
//   },
//   {
//     title: 'Join the community',
//     description: 'Get a custom Discord role, priority support, and behind-the-scenes content.',
//   },
// ];

// export default function AdCarousel() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % adSlides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#1f1f2e] rounded-xl p-4 shadow-md border border-gray-700 text-white w-full max-w-xl mx-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center border-b border-gray-600 pb-2">
//         <p className="text-xs text-gray-300 font-semibold tracking-widest">ADVERTISEMENT</p>
//         <a
//           href="#"
//           className="text-sm text-yellow-400 font-medium inline-flex items-center space-x-1 hover:underline"
//         >
//           <span>Remove Ads</span>
//           <Image src="/icons/go-to-the-link.svg" alt="Link" width={12} height={12} />
//         </a>
//       </div>

//       {/* Slide Content */}
//       <div className="py-6 min-h-[100px] transition-all duration-500 ease-in-out">
//         <h3 className="text-lg font-semibold mb-2">{adSlides[activeSlide].title}</h3>
//         <p className="text-sm text-gray-300">{adSlides[activeSlide].description}</p>
//       </div>

//       {/* Carousel Indicators */}
//       <div className="flex justify-center space-x-2 pt-2">
//         {adSlides.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setActiveSlide(index)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
//               activeSlide === index ? 'bg-yellow-400' : 'bg-gray-500'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const adSlides = [
  {
    title: "Remove all ads",
    description:
      "Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new. Discord role.",
  },
  {
    title: "Support Us",
    description:
      "Become a supporter and enjoy exclusive rewards and early access to features.",
  },
  {
    title: "Join the community",
    description:
      "Get a custom Discord role, priority support, and behind-the-scenes content.",
  },
];

export default function AdCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % adSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // if(isMobile){
  //   return(
  //     <div className="flex flex-col items-center">
  //     {/* Ad Card for Mobile */}
  //     <div className="bg-[#1f1f2e] w-full h-[180px] p-2 shadow-md border border-gray-800 text-white overflow-hidden rounded-lg">
  //       <div className="flex justify-between items-center border-b border-gray-600 pb-2">
  //         <p className=" text-xs text-gray-300 font-medium tracking-widest">ADVERTISEMENT</p>
  //         <a
  //           href="#"
  //           className=" text-xs text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline"
  //         >
  //           <span>Remove Ads</span>
  //           <Image src="/images/icons/go-to-the-link.svg" alt="Link" width={12} height={12} />
  //         </a>
  //       </div>
  //       <div className="py-6 min-h-[100px] transition-all duration-500 ease-in-out">
  //         <h3 className=" font-bold text-lg mb-2 truncate">
  //           {adSlides[activeSlide].title}
  //         </h3>
  //         <p className=" text-[var(--adtext)] font-normal text-sm line-clamp-2">
  //           {adSlides[activeSlide].description}
  //         </p>
  //       </div>
  //     </div>
  //     <div className="flex justify-center space-x-2 mt-3">
  //       {adSlides.map((_, index) => (
  //         <span
  //           key={index}
  //           onClick={() => setActiveSlide(index)}
  //           className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
  //             activeSlide === index ? 'bg-yellow-400' : 'bg-gray-500'
  //           }`}
  //         />
  //       ))}
  //     </div>
  //   </div>
  //   )
  // }

  return (
    // <div className="flex flex-col items-center">
    //   {/* Ad Card */}
    //   <div className="bg-[#1f1f2e] w-full h-[250px] p-4 shadow-md border border-gray-800 text-white overflow-hidden">

    //     {/* Header */}
    //     <div className="flex justify-between items-center border-b border-gray-600 pb-2">
    //       <p className=" text-xs text-gray-300 font-font-medium tracking-widest">ADVERTISEMENT</p>
    //       <a
    //         href="#"
    //         className="  text-xs text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline"
    //       >
    //         <span>Remove Ads</span>
    //         <Image src="/images/icons/go-to-the-link.svg" alt="Link" width={12} height={12} />
    //       </a>
    //     </div>

    //     {/* Slide Content */}
    //     <div className="py-6 min-h-[100px] transition-all duration-500 ease-in-out">
    //     <h3 className=" font-bold text-lg mb-2 truncate">
    //     {adSlides[activeSlide].title}</h3>
    //     <p className=" text-[var(--adtext)] font-normal text-sm line-clamp-2">
    //     {adSlides[activeSlide].description}</p>
    //     </div>
    //   </div>

    //   {/* Carousel Indicators (Outside the card) */}
    //   <div className="flex justify-center space-x-2 mt-3">
    //     {adSlides.map((_, index) => (
    //       <span
    //         key={index}
    //         onClick={() => setActiveSlide(index)}
    //         className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
    //           activeSlide === index ? 'bg-yellow-400' : 'bg-gray-500'
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className="flex flex-col items-center">
      {/* Ad Card */}
      <div
        className={`bg-[#1f1f2e] w-full ${
          isMobile ? "h-[170px] rounded-sm" : "h-[250px] rounded-lg"
        } p-4 shadow-md border border-gray-800 text-white overflow-hidden`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <p
            className={` tracking-widest ${
              isMobile ? "text-[10px]" : "text-xs"
            } text-gray-300 font-medium`}
          >
            ADVERTISEMENT
          </p>
          <a
            href="#"
            className={` inline-flex items-center space-x-1 hover:underline font-medium ${
              isMobile ? "text-[10px]" : "text-xs"
            } text-[oklch(0.627 0.265 303.9)]`}
          >
            <span>Remove Ads</span>
            <Image
              src="/images/icons/go-to-the-link.svg"
              alt="Link"
              width={12}
              height={12}
            />
          </a>
        </div>

        {/* Slide Content */}
        <div
          className={`transition-all duration-500 ease-in-out ${isMobile ? "py-3" : "py-6"} min-h-[60px]`}
        >
          <h3
            className={` font-bold mb-1 truncate ${
              isMobile ? "text-sm" : "text-lg"
            }`}
          >
            {adSlides[activeSlide].title}
          </h3>
          <p
            className={` text-[var(--adtext)] font-normal line-clamp-2 ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            {adSlides[activeSlide].description}
          </p>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-3">
        {adSlides.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              activeSlide === index ? "bg-purple-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
