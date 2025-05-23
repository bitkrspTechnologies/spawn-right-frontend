// components/Leaderboard/LeaderboardLayout.tsx

import React from "react";
import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface LeaderboardLayoutProps {
  isMobile: boolean;
  children: React.ReactNode; 
}

const LeaderboardLayout: React.FC<LeaderboardLayoutProps> = ({ isMobile, children }) => {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        <div className="h-full pt-32 overflow-y-auto scrollbar-hide">
          {!isMobile ? (
            <>
              {/* Ad + Leaderboard Section */}
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

              {/* Content Section */}
              <div className="flex gap-2 px-2 py-4 justify-center items-start ">
                <div className="flex-1 flex flex-col gap-3">
                  {children}
                </div>

                {/* Side Ad */}
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
                <AdForLeaderBoard />
              </div>
              <div className="mt-6">
                {children}
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
};

export default LeaderboardLayout;
