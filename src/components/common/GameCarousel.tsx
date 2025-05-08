// 'use client'; // Ensure this is a client-side component

// import React, { useEffect, useState } from 'react';

// const games = [
//   {
//     title: 'Counter Strike 2',
//     image: '/images/gamecarousel/CounterStrike.svg',
//   },
//   {
//     title: 'PUBG',
//     image: '/images/gamecarousel/gamebgmi.svg',
//   },
//   {
//     title: 'Call of Duty',
//     image: '/images/gamecarousel/gamecod.svg',
//   },
// ];

// export const GameCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const [isClient, setIsClient] = useState(false); // Hydration-safe state

//   useEffect(() => {
//     setIsClient(true); // Only render on client
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % games.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!isClient) return null; // Prevent server mismatch

//   return (
//     <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-10">
//       <h2 className="text-white text-4xl text-center font-bold mb-8">Games Included</h2>

//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {games.map((game, i) => (
//           <div key={i} className="min-w-full flex justify-center px-4 group relative">
//             <img
//               src={game.image}
//               alt={game.title}
//               className="rounded-xl shadow-xl w-[300px] h-[400px] object-cover"
//             />
//             <button className="absolute bottom-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
//               WATCH NOW!
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {games.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full cursor-pointer ${
//               i === index ? 'bg-white' : 'bg-gray-500'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const games = [
  {
    title: "Counter Strike 2",
    image: "/images/gamecarousel/CounterStrike.svg",
  },
  {
    title: "PUBG",
    image: "/images/gamecarousel/gamebgmi.svg",
  },
  {
    title: "Call of Duty",
    image: "/images/gamecarousel/gamecod.svg",
  },
  {
    title: "Apex Legends",
    image: "/images/gamecarousel/apexLegends.jpg",
  },
  {
    title: "Valorant",
    image: "/images/gamecarousel/valorant.jpg",
  },
];

const GameCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % games.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[70%] max-w-7xl mx-auto overflow-hidden py-10 px-4">
      <h2 className="text-white text-4xl text-center font-bold mb-8">
        Games Included
      </h2>

      {/* Carousel Container */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (260 + 8)}px)`,
              width: `${games.length * 2 * (260 + 8)}px`,
            }}
          >
            {[...games, ...games].map((game, i) => (
              <div
                key={`${game.title}-${i}`}
                className="w-[260px] h-[380px] relative group overflow-hidden rounded-xl shadow-lg mr-2"
              >
                <Image
                  src={game.image}
                  alt={game.title}
                  className="object-cover w-full h-full rounded-xl"
                  width={260}
                  height={380}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  <button className="px-5 py-2 bg-pink-600/60 hover:bg-pink-600/80 text-white text-sm font-semibold rounded-md whitespace-nowrap">
                    WATCH NOW!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {games.map((_, i) => (
          <div
            key={i}
            onClick={() => setStartIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${
              i === startIndex % games.length ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
