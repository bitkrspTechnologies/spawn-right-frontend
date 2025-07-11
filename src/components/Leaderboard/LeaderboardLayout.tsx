import React from "react";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

interface LeaderboardLayoutProps {
  isMobile: boolean;
  children: React.ReactNode;
}

const LeaderboardLayout: React.FC<LeaderboardLayoutProps> = ({
  isMobile,
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="relative w-full overflow-hidden min-h-screen">
        <div className="pt-16 overflow-y-auto scrollbar-hide">
          {!isMobile ? (
            <>
              {/* Desktop Layout */}
              <div className="flex justify-center gap-4 flex-wrap w-full items-start mb-10 px-4">
                {/* Main Content */}
                <div className="flex-1 min-w-[700px] max-w-[980px] w-full flex">
                  {children}
                </div>

                {/* Side Ad */}
                <div className="flex flex-col mt-5 sticky top-2 self-start gap-4">
                  <div className="min-w-[200px] max-w-[300px] w-full min-h-[300px]">
                    <AdForLeaderBoard />
                  </div>
                  <div className="min-w-[200px] max-w-[300px]">
                    <AdForLeaderBoard />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Mobile Layout */}
              <div className="px-2 py-4 flex flex-col gap-4 mb-10">
                {/* Ad Header Section */}
                <div className="bg-[#1f1f2e] p-2 rounded-md shadow-md border border-gray-800 text-white">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
                    <p className="text-xs text-gray-300 tracking-widest">
                      ADVERTISEMENT
                    </p>
                    <button className="font-[roboto] text-xs text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline">
                      <span>Remove Ads</span>
                      <Image
                        src="/images/icons/go-to-the-link.svg"
                        alt="Link"
                        width={12}
                        height={12}
                        className="ml-1"
                      />
                    </button>
                  </div>

                  {/* Remove All Ads Section */}
                  <div className="flex flex-col">
                    <button className="font-[roboto] text-xs text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline mb-1">
                      <span>Remove All Ads</span>
                    </button>
                    <p className="text-xs text-gray-400 font-normal">
                      Say goodbye to ads, support our team, see exclusive sneak
                      peeks, and get a shiny new Discord role.
                    </p>
                  </div>
                </div>

                {/* Ads for Mobile */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="w-full h-48">
                    <AdForLeaderBoard />
                  </div>
                  <div className="w-full h-48">
                    <AdForLeaderBoard />
                  </div>
                </div>

                {/* Main Content */}
                <div className="mt-2">{children}</div>

                {/* Bottom Ad */}
                <div className="w-full h-48 mt-4">
                  <AdForLeaderBoard />
                </div>
              </div>
            </>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LeaderboardLayout;