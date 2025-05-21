// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// import Button from "@/components/Button/Button";
// import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
// import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";
// // import DummyComponent from "@/components/sohan/DummyComponent";
// // import GlobalLeaderboardCard from "@/components/sohan/GlobalLeaderboardCard";
// // import AdForLeaderBoard from "@/components/sohan/AdForLeaderBoard";
// // import LeaderBoardGame from "@/components/sohan/leaderBoardGame";
// // import Lup from "@/components/sohan/Lup";

// export default function Tournaments() {
//   return (
//     <>
//       <Navbar />
//       <div className="relative h-screen w-full overflow-hidden">
//         <div className="h-full pt-38 overflow-y-auto scrollbar-hide">
//           {/* Ad + Leaderboard Section */}
//           <div className="flex gap-4 items-stretch px-4 py-6">
//             <div className="flex-1 min-w-[300px] max-w-[400px]">
//               <GlobalLeaderboardCard />
//             </div>
//             <div className="flex-1 min-w-[300px] max-w-[400px]">
//               <AdForLeaderBoard />
//             </div>
//             <div className="flex-1 min-w-[300px] max-w-[400px]">
//               <AdForLeaderBoard />
//             </div>
//           </div>

//           <div className="flex gap-8 px-4 py-6">
//             <div className="flex-1 flex flex-col gap-6">
//               {/* Tabs */}
//               <TournamentsTabs />

//               {/* 2x2 Grid */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="w-full h-[250px]">
//                   {/* <DummyComponent /> */}
//                 </div>
//                 <div className="w-full h-[250px]">
//                   {/* <DummyComponent /> */}
//                 </div>
//                 <div className="w-full h-[250px]">
//                   {/* <DummyComponent /> */}
//                 </div>
//                 <div className="w-full h-[250px]">
//                   {/* <DummyComponent /> */}
//                 </div>
//               </div>
//             </div>

//             {/* Right Section: Ad */}
//             <div className="w-[300px] h-[400px]">
//               <AdForLeaderBoard />
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@/components/Button/Button";
import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";

export default function Tournaments() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen">
        <div className="pt-32 px-4 pb-20">
          {/* Ad + Leaderboard Section */}
          {isMobile ? (
            <div className="flex flex-col gap-4">
              <GlobalLeaderboardCard />
              <AdForLeaderBoard />
              <AdForLeaderBoard />
            </div>
          ) : (
            <div className="flex gap-4 items-stretch py-6">
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
          )}

          {/* Main Content */}
          <div className={`flex ${isMobile ? "flex-col" : "gap-8"} py-6`}>
            <div className="flex-1 flex flex-col gap-6">
              {/* Tabs */}
              <TournamentsTabs />

              {/* Grid (Responsive) */}
              <div
                className={`grid gap-6 ${
                  isMobile ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                <div className="w-full h-[250px]">{/* Component */}</div>
                <div className="w-full h-[250px]">{/* Component */}</div>
                <div className="w-full h-[250px]">{/* Component */}</div>
                <div className="w-full h-[250px]">{/* Component */}</div>
              </div>
            </div>

            {/* Right Ad */}
            {!isMobile && (
              <div className="w-[300px] h-[400px]">
                <AdForLeaderBoard />
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

