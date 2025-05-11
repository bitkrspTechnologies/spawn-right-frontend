"use client";
// import Image from "next/image";
// import { ModeToggle } from '@/components/ThemeProvider/ThemeToggler';
// import Button from "@/components/Button/Button";
// import React, { useState } from "react";
// import MainContent from "@/pages/Home/MainContent";

// export default function Home() {
//   const [selectedBtn, setSelectedBtn] = React.useState('bgmi');

//   const gameButtons = [
//     {
//       key: 'bgmi',
//       text: 'BGMI',
//       icon: (
//         <Image
//           src="/images/bgmi.svg"
//           alt="BGMI Icon"
//           width={34}
//           height={34}
//           className="object-contain py-0"
//         />
//       ),
//     },
//     {
//       key: 'cod',
//       text: 'COD',
//       icon: (
//         <Image
//           src="/images/cod.svg"
//           alt="COD Icon"
//           width={35}
//           height={35}
//         />
//       ),
//     },
//     {
//       key: 'indus',
//       text: 'Indus',
//       icon: (
//         <Image
//           src="/images/indus.svg"
//           alt="Indus Icon"
//           width={35}
//           height={35}
//           className="mb-2"
//         />
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="pt-22">
//         <div className="flex gap-3 max-w-7xl mx-auto px-6">
//           {gameButtons.map(({ key, text, icon }) => (
//             <Button
//               key={key}
//               text={text}
//               icon={icon}
//               fullWidth
//               className="flex justify-center items-center"
//               selected={selectedBtn === key}
//               onClick={() => setSelectedBtn(key)}
//             />
//           ))}
//         </div>

//       </div>
//       <MainContent />
//     </>
//   );
// }
{
  /* <p>lorem300000</p>
    <ModeToggle /> */
}

import Image from "next/image";
import { ModeToggle } from "@/components/ThemeProvider/ThemeToggler";
import Button from "@/components/Button/Button";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/common/Carousel";
import AdSection from "@/components/common/AdSection";
// import { GameCarousel } from "@/components/common/GameCarousel";
import dynamic from "next/dynamic";
import MatchCard from "@/components/common/MatchCardInclude";
import Footer from "@/components/Footer/Footer";
import LiveMatches from "@/components/LiveMatches/LiveMatches";
import TournamentBracket from "@/components/FinishedMatch/FinishedMatch";
import DefaultSlider from "@/components/common/VedioCarousel";
import { CustomersSectionDemo } from "@/components/TrustedBy/TrustedBy";
import UpcomingEventsSection from "@/components/UpcomingMatches/UpcomingMatches";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import FinishedMatch from '@/components/FinishedMatch/FinishedMatch'
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import JoinBanner from "@/components/common/JoinBanner";
const GameCarousel = dynamic(() => import("@/components/common/GameCarousel"), {
  ssr: false,
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className={`pt-20 fixed top-0 z-30 w-full shadow-md px-4 py-3 transition-all duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        ></div>

        {/* Fixed Left Sidebar */}
        <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-45 left-5 z-10 p-4 ">
          {/* Sidebar content */}
        </div>

        {/* Fixed Right Sidebar */}
        <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-45 right-5 z-10 p-4 ">
          {/* Sidebar content */}
        </div>

        {/* Scrollable Main Content */}
        <div className="h-full pt-38 p-1 overflow-y-auto ml-[110px] mr-[110px] pb-10 scrollbar-hide ">
          {/* Sticky Button Header */}

          <div className="w-full h-[150px] mt-4 px-4">
            <Image
              src="/images/banner.svg"
              alt="Gradient Banner"
              width={1920}
              height={150}
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div className="-mt-12 mb-8 px-4">
            <Carousel />
          </div>

          <div className="flex gap-5 min-h-[200px] mb-8 px-4">
            <AdSection />
            <div className="w-1/2">
              <LiveMatches variant="carousel" />
            </div>
          </div>

          <UpcomingEventsSection />
          <div className="flex gap-5 min-h-[200px] mb-8 px-4">
            <LiveMatches variant="grid" />
          </div>
          <GameCarousel />
          <div className="m-14 mt-20">
            <h2 className="text-xl md:text-2xl font-bold text-center text-white">
              Shop Right
            </h2>

            <ProductShowcase />
            <div className="mt-10 flex justify-center">
              <Link href="/shop">
                <Button text="Show More" className="py-4 text-base" />
              </Link>
            </div>
          </div>
          <DefaultSlider />

          <FinishedMatch />

          <div className="px-6 mt-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              We are trusted by
            </h2>
            <CustomersSectionDemo />
          </div>

          <JoinBanner />
        </div>
      </div>
      <Footer />
    </>
  );
}
