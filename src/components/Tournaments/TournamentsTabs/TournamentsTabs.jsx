// "use client";

// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchAllTournaments } from "@/services/Tournaments";
// // import MatchCard from "@/components/Leaderboard/MatchCard"; // Make sure this path is correct
// import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
// import MatchCard from "@/components/Leaderboard/DummyComponent";

// export default function TournamentsTabs() {
//   const [activeTab, setActiveTab] = useState("ongoing");

// const {
//   data: tournaments,
//   isLoading,
//   isError,
//   error,
// } = useQuery({
//   queryKey: ["tournaments", activeTab],
//   queryFn: () => fetchAllTournaments(activeTab),
// });

// const tabs = [
//   { key: "ongoing", label: "Live" },
//   { key: "upcoming", label: "Upcoming" },
//   { key: "completed", label: "Past" },
// ];

//   console.log("API response:", tournaments);

//   return (
//     <div>
//       <div className="flex justify-between bg-[#2a2a2a] overflow-hidden">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             className={`w-full text-center py-2 text-sm font-semibold transition-all duration-200
//               ${
//                 activeTab === tab.key
//                   ? "text-pink-500 border-b-2 border-pink-500"
//                   : "text-gray-300"
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tournaments List */}
//       <div className="mt-4">
//         {isLoading ? (
//           <TournamentSkeleton />
//         ) : isError ? (
//           <div className="text-red-500">
//             Error loading tournaments: {error?.message}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tournaments?.data?.length > 0 ? (
//               tournaments.data.map((tournament) => (
//                 <MatchCard key={tournament._id} tournament={tournament} />
//               ))
//             ) : (
//               <div className="col-span-3 text-center text-gray-400 py-8">
//                 No tournaments found
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTournaments } from "@/services/Tournaments";
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
import { TournamentCard } from "@/components/common/TournamentCard";


export default function TournamentsTabs({ gameName = "all", }) {
  const [activeTab, setActiveTab] = useState("ongoing");

  const {
    data: tournaments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tournaments", activeTab, gameName],
    queryFn: () => fetchAllTournaments(activeTab),
  });

  const tabs = [
    { key: "ongoing", label: "Live" },
    { key: "upcoming", label: "Upcoming" },
    { key: "completed", label: "Past" },
  ];

  // Filter tournaments based on game name (when available)
  const filteredTournaments =
    tournaments?.data?.filter((tournament) => {
      // When gameName is 'all', show all tournaments
      if (gameName === "all") return true;

      // Future-proof filtering when game data is available
      // Replace 'game' with the actual field name from your API
      return tournament.game?.toLowerCase() === gameName.toLowerCase();
    }) || [];

  return (
    <div className="w-full mx-auto sm:px-4 lg:px-6">
      <div className="flex justify-between bg-[#2a2a2a] rounded-t-lg overflow-hidden">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-center py-3 text-sm font-medium transition-colors
              ${activeTab === tab.key
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-300 hover:text-gray-100"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <TournamentSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center py-8">
            Error loading tournaments: {error.message}
          </div>
        ) : filteredTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTournaments.map((tournament) => (
              <TournamentCard key={tournament._id} tournament={tournament} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No {activeTab} {gameName !== "all" ? gameName : ""} tournaments
            found
          </div>
        )}
      </div>
    </div>
  );
}
