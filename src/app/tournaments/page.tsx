// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";

// // import Button from "@/components/Button/Button";
// // import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
// // import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
// // import Navbar from "@/components/Navbar/Navbar";
// // import Footer from "@/components/Footer/Footer";
// // import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";
// // // import DummyComponent from "@/components/sohan/DummyComponent";
// // // import GlobalLeaderboardCard from "@/components/sohan/GlobalLeaderboardCard";
// // // import AdForLeaderBoard from "@/components/sohan/AdForLeaderBoard";
// // // import LeaderBoardGame from "@/components/sohan/leaderBoardGame";
// // // import Lup from "@/components/sohan/Lup";

// // export default function Tournaments() {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="relative h-screen w-full overflow-hidden">
// //         <div className="h-full pt-38 overflow-y-auto scrollbar-hide">
// //           {/* Ad + Leaderboard Section */}
// //           <div className="flex gap-4 items-stretch px-4 py-6">
// //             <div className="flex-1 min-w-[300px] max-w-[400px]">
// //               <GlobalLeaderboardCard />
// //             </div>
// //             <div className="flex-1 min-w-[300px] max-w-[400px]">
// //               <AdForLeaderBoard />
// //             </div>
// //             <div className="flex-1 min-w-[300px] max-w-[400px]">
// //               <AdForLeaderBoard />
// //             </div>
// //           </div>

// //           <div className="flex gap-8 px-4 py-6">
// //             <div className="flex-1 flex flex-col gap-6">
// //               {/* Tabs */}
// //               <TournamentsTabs />

// //               {/* 2x2 Grid */}
// //               <div className="grid grid-cols-2 gap-6">
// //                 <div className="w-full h-[250px]">
// //                   {/* <DummyComponent /> */}
// //                 </div>
// //                 <div className="w-full h-[250px]">
// //                   {/* <DummyComponent /> */}
// //                 </div>
// //                 <div className="w-full h-[250px]">
// //                   {/* <DummyComponent /> */}
// //                 </div>
// //                 <div className="w-full h-[250px]">
// //                   {/* <DummyComponent /> */}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Section: Ad */}
// //             <div className="w-[300px] h-[400px]">
// //               <AdForLeaderBoard />
// //             </div>
// //           </div>
// //           <Footer />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import { useMediaQuery } from "react-responsive";
// import React from "react";
// import GlobalLeaderboardCard from "@/components/Leaderboard/GlobalLeaderboardCard";
// import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";
// import DummyComponent from "@/components/Leaderboard/DummyComponent";

// export default function Tournaments() {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

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

//               {/* Tournaments Section */}
//               <div className="flex gap-2 px-2 py-4 justify-center items-start ">
//                 <div className="flex-1 flex flex-col gap-3">
//                   <TournamentsTabs />
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
//                 <TournamentsTabs />
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
// }


"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";

export default function Tournaments() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <LeaderboardLayout isMobile={isMobile}>
      <TournamentsTabs />
    </LeaderboardLayout>
  );
}
