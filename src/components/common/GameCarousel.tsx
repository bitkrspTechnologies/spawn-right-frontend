// "use client";

// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const games = [
//   {
//     title: "Counter Strike 2",
//     image: "/images/gamecarousel/CounterStrike.svg",
//   },
//   {
//     title: "PUBG",
//     image: "/images/gamecarousel/gamebgmi.svg",
//   },
//   {
//     title: "Call of Duty",
//     image: "/images/gamecarousel/gamecod.svg",
//   },
//   {
//     title: "Apex Legends",
//     image: "/images/gamecarousel/apexLegends.jpg",
//   },
//   {
//     title: "Valorant",
//     image: "/images/gamecarousel/valorant.jpg",
//   },
// ];

// const GameCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const next = () => {
//     setStartIndex((prev) => (prev + 1) % games.length);
//   };

//   const prev = () => {
//     setStartIndex((prev) => (prev - 1 + games.length) % games.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       next();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-[70%] max-w-7xl mx-auto overflow-hidden py-10 px-4">
//       <h2 className="text-white text-4xl text-center font-bold mb-8">
//         Games Included
//       </h2>

//       {/* Carousel Container */}
//       <div className="relative flex items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={prev}
//           className="absolute left-0 z-10 bg-white/5 hover:bg-black/70 text-white p-2 rounded-full"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         <div className="overflow-hidden w-full">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${startIndex * (260 + 8)}px)`,
//               width: `${games.length * 2 * (260 + 8)}px`,
//             }}
//           >
//             {[...games, ...games].map((game, i) => (
//               <div
//                 key={`${game.title}-${i}`}
//                 className="w-[260px] h-[380px] relative group overflow-hidden rounded-xl shadow-lg mr-2"
//               >
//                 <Image
//                   src={game.image}
//                   alt={game.title}
//                   className="object-cover w-full h-full rounded-xl"
//                   width={260}
//                   height={380}
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
//                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
//                   <button className="px-5 py-2 bg-pink-600/60 hover:bg-pink-600/80 text-white text-sm font-semibold rounded-md whitespace-nowrap">
//                     WATCH NOW!
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={next}
//           className="absolute right-0 z-10 bg-white/5 hover:bg-black/70 text-white p-2 rounded-full"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {games.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setStartIndex(i)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${
//               i === startIndex % games.length ? "bg-white" : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameCarousel;

"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const games = [
  {
    title: "Counter Strike 2",
    image: "/images/gamecarousel/CounterStrike.svg",
  },
  { title: "PUBG", image: "/images/gamecarousel/gamebgmi.svg" },
  // { title: "Call of Duty", image: "/images/gamecarousel/gamecod.svg" },
  // { title: "Apex Legends", image: "/images/gamecarousel/apexLegends.jpg" },
  { title: "Valorant", image: "/images/gamecarousel/valorant.jpg" },
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

  const cardWidth = 260;
  const gap = 8;

  return (
    <div className="relative w-full sm:w-[70%] max-w-7xl mx-auto overflow-hidden py-10 px-4">
      <h2 className="text-white text-3xl sm:text-4xl text-center font-bold mb-8">
        Games Included
      </h2>

      {/* Carousel Container */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 z-10 bg-white/5 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
              width: `${games.length * 2 * (cardWidth + gap)}px`,
            }}
          >
            {[...games, ...games].map((game, i) => (
              <div
                key={`${game.title}-${i}`}
                className="w-[220px] sm:w-[260px] h-[320px] sm:h-[380px] relative group overflow-hidden rounded-xl shadow-lg mr-2 flex-shrink-0"
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
                  <button className="px-5 py-2 bg-pink-600/60 hover:bg-pink-600/80 text-white text-sm font-semibold rounded-md">
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
          className="absolute right-2 z-10 bg-white/5 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
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
