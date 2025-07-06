import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTournaments } from "@/services/Tournaments";
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
import { TournamentCard } from "@/components/common/TournamentCard";
import { useSearchParams } from "next/navigation";

export default function TournamentsTabs() {
  const searchParams = useSearchParams(); // ✅ hook to get the current URL search params
  const tabFromUrl = searchParams?.get("tab") || "ongoing";
  const gameKey = searchParams.get("game");  
  const gameName = searchParams.get("name");
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const {
    data: tournaments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tournaments", activeTab, gameKey],
    queryFn: () => fetchAllTournaments(activeTab, gameKey),
  });

  const tabs = [
    { key: "ongoing", label: "Live" },
    { key: "upcoming", label: "Upcoming" },
    { key: "completed", label: "Past" },
  ];

  // Filter tournaments based on game name (when available)
  const filteredTournaments =
    tournaments?.data?.filter((tournament) => {
      
      return tournament.game?.toLowerCase() === gameName.toLowerCase();
    }) || [];

  return (
    <div className="w-full max-w-5xl mx-auto sm:px-4 lg:px-6 mt-10">
      <div className="flex justify-between bg-white/10 rounded-t-lg overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <TournamentSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center py-8">
            Error loading tournaments: {error.message}
          </div>
        ) : filteredTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTournaments.map((tournament,i) => (
              <TournamentCard key={i} tournament={tournament} gameKey={gameKey}/>
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
