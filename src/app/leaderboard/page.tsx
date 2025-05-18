"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Scoreboard from "@/components/Leaderboard/Scoreboard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Leaderboard() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        {/* <div className="pt-32 overflow-y-auto scrollbar-hide pb-20"> */}
        <div className="h-full pt-32 overflow-y-auto scrollbar-hide">
          {!isMobile ? (
            <>
              <div className="flex gap-4 justify-center items-stretch px-4 py-6">
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

              <div className="flex justify-center items-start">
                <div>
                  <Scoreboard />
                </div>
                <div className="flex-1 mt-10 min-w-[300px] max-w-[400px]">
                  <AdForLeaderBoard />
                </div>
              </div>
            </>
          ) : (
            <div className="px-4">
              <GlobalLeaderboardCard />
              <div className="mt-4">
                <AdForLeaderBoard />
              </div>
              <div className="mt-4">
                <Scoreboard />
              </div>
              <div className="mt-4">
                <AdForLeaderBoard />
              </div>
            </div>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}
