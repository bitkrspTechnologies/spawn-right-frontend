// // components/Leaderboard/LeaderboardLayout.tsx

// import React from "react";
// import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
// import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";

// interface LeaderboardLayoutProps {
//   isMobile: boolean;
//   children: React.ReactNode;
// }

// const LeaderboardLayout: React.FC<LeaderboardLayoutProps> = ({ isMobile, children }) => {
//   return (
//     <>
//       <Navbar />
//       <div className="relative h-screen w-full overflow-hidden">
//         <div className="h-full pt-32 overflow-y-auto scrollbar-hide">
//           {!isMobile ? (
//             <>
//               {/* Ad + Leaderboard Section */}
//               <div className="flex gap-4 justify-center items-stretch px-4 py-6">
//                 <div className="flex-1 min-w-[300px] max-w-[400px]">
//                   <GlobalLeaderboardCard />
//                 </div>
//                 <div className="flex-1 min-w-[300px] max-w-[400px]">
//                   <AdForLeaderBoard />
//                 </div>
//                 <div className="flex-1 min-w-[300px] max-w-[400px]">
//                   <AdForLeaderBoard />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="flex gap-2 px-2 py-4 justify-center items-start ">
//                 <div className="flex-1 flex flex-col gap-3">
//                   {children}
//                 </div>

//                 {/* Side Ad */}
//                 <div className="flex-1 mt-10 min-w-[300px] max-w-[400px]">
//                   <AdForLeaderBoard />
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="px-4">
//               <GlobalLeaderboardCard />
//               <div className="mt-4">
//                 <AdForLeaderBoard />
//               </div>
//               <div className="mt-4">
//                 <AdForLeaderBoard />
//               </div>
//               <div className="mt-6">
//                 {children}
//               </div>
//               <div className="mt-4">
//                 <AdForLeaderBoard />
//               </div>
//             </div>
//           )}
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeaderboardLayout;

// components/Leaderboard/LeaderboardLayout.tsx

import React from "react";
import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
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
      <div className="relative h-screen w-full overflow-hidden">
        <div className="h-full pt-15 overflow-y-auto scrollbar-hide">
          {!isMobile ? (
            <>
              {/* Ad + Leaderboard Section */}
              {/* <div className="flex flex-wrap gap-4 justify-center items-stretch px-4 py-6">
                <div className="flex-1 min-w-[300px] max-w-[550px]">
                  <GlobalLeaderboardCard />
                </div>
                <div className="flex-1 min-w-[200px] max-w-[400px]">
                  <AdForLeaderBoard />
                </div>
                <div className="flex-1 min-w-[200px] max-w-[300px]">
                  <AdForLeaderBoard />
                </div>
              </div> */}

              {/* Content Section */}
              <div className="flex gap-1 flex-wrap  items-start">
                {/* Main Content */}
                <div className="flex-1 min-w-[700px] max-w-[980px] w-full flex ">
                  {children}
                </div>

                {/* Side Ad */}
                <div className="flex flex-col mt-5 sticky top-2 self-start">
                <div className=" min-w-[200px] max-w-[300px] w-full min-h-[300px]">
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
              <div className="px-1 py-4 flex flex-col gap-6">
                <div className="bg-[#1f1f2e] p-1 shadow-md border border-gray-800 text-white">
                  {/* Top bar with Advertisement and bottom border */}
                  <div className="flex justify-between items-center border-b border-gray-700 pb-1 mb-1">
                    <p className="text-[8px] text-gray-300 tracking-widest">
                      ADVERTISEMENT
                    </p>
                    <div className="mb-3">
                      <button className="font-[roboto] text-[10px] text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline">
                        <span>Remove Ads</span>
                        <Image
                          src="/images/icons/go-to-the-link.svg"
                          alt="Link"
                          width={12}
                          height={12}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Remove All Ads Section */}

                  <button className="font-[roboto] text-[10px] text-[#F2BF43] font-medium inline-flex items-center space-x-1 hover:underline">
                    <span>Remove All Ads</span>
                  </button>
                  {/* Short description */}
                  <p className="text-[9px] text-gray-400 font-normal">
                    Say goodbye to ads, support our team, see exclusive sneak
                    peeks, and get a shiny new Discord role.
                  </p>
                </div>

                {/* <GlobalLeaderboardCard /> */}

                {/* Single Small Ad for Mobile */}

                {/* Main Content */}
                <div>{children}</div>
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
