"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { HyperText } from "@/components/Comming/Comming"
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
                      COMMING SOON!!!...
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
                  Comming soon
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
//               <div className="flex gap-8 px-4 py-4 justify-center items-start ml-30 mr-30">
//                 <div className="flex-1 flex flex-col gap-6">
//                   <TournamentsTabs />

//                   <div className="grid grid-cols-2 gap-6 mb-10">
//                     {[...Array(4)].map((_, index) => (
//                       <div key={index} className="w-full h-[350px]">
//                         <DummyComponent />
//                       </div>
//                     ))}
//                   </div>
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
//               <div className="grid grid-cols-1 gap-6 my-6">
//                 {[...Array(4)].map((_, index) => (
//                   <div key={index} className="w-full h-[350px]">
//                     <DummyComponent />
//                   </div>
//                 ))}
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

