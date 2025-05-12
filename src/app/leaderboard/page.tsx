"use client";

import Image from "next/image";

import Button from "@/components/Button/Button";
import React, { useEffect, useState } from "react";
import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Scoreboard from "@/components/Leaderboard/Scoreboard";
import Navbar from "@/components/Navbar/Navbar";
export default function Home() {
  const [selectedBtn, setSelectedBtn] = useState("bgmi");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gameButtons = [
    {
      key: "bgmi",
      text: "BGMI",
      icon: (
        <Image src="/images/bgmi.svg" alt="BGMI Icon" width={34} height={34} />
      ),
    },
    {
      key: "cod",
      text: "COD",
      icon: (
        <Image src="/images/cod.svg" alt="COD Icon" width={35} height={35} />
      ),
    },
    {
      key: "indus",
      text: "Indus",
      icon: (
        <Image
          src="/images/indus.svg"
          alt="Indus Icon"
          width={35}
          height={35}
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className={`pt-20 fixed top-0 z-30 w-full shadow-md px-4 py-3 transition-all duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div className="flex gap-3 max-w-7xl mx-auto px-6">
            {gameButtons.map(({ key, text, icon }) => (
              <Button
                key={key}
                text={text}
                icon={icon}
                fullWidth
                className="flex justify-center items-center"
                selected={selectedBtn === key}
                onClick={() => setSelectedBtn(key)}
              />
            ))}
          </div>
        </div>

        <div className="h-full pt-38 p-31 overflow-y-auto pb-10 scrollbar-hide ">
          <div className="flex gap-4 items-stretch px-4 py-6">
            <div className="flex-1 min-w-[300px] max-w-[400px]">
              <GlobalLeaderboardCard />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[400px]">
              <AdForLeaderBoard />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[400px]">
              <AdForLeaderBoard />
            </div>
          </div>

          <div>
            <div className="flex">
              <div>
                <Scoreboard />
              </div>
              <div className="w-100">
                <AdForLeaderBoard />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
