"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { HyperText } from "@/components/Comming/Comming";

export default function Commingsoon() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        {/* <div className="pt-32 overflow-y-auto scrollbar-hide pb-20"> */}
        <div className="h-full pt-32 overflow-y-auto scrollbar-hide">
          {!isMobile ? (
            <>
              <div className="p-20 flex justify-center">
                <HyperText duration={1000} delay={200} startOnView>
                  COMING SOON!!!...
                </HyperText>
              </div>
              <div className="flex gap-4 justify-center items-stretch px-4 py-6">
                <div className="flex-1 min-w-[300px] max-w-[400px]">
                  <AdForLeaderBoard />
                </div>
                <div className="flex-1 min-w-[300px] max-w-[400px]">
                  <AdForLeaderBoard />
                </div>
                <div className="flex-1 min-w-[300px] max-w-[400px]">
                  <AdForLeaderBoard />
                </div>
              </div>
            </>
          ) : (
            <div className="px-4">
              <div className="p-10">
                <HyperText duration={1000} delay={200} startOnView>
                  Coming soon
                </HyperText>
              </div>
              <div className="mt-4">
                <AdForLeaderBoard />
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