
'use client'
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchTournamentMatches } from "@/services/LiveMatches";
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
import MatchCard from "@/components/common/MatchCardInclude";

export default function TournamentMatchesPage() {
  const params = useParams();
  const tournamentId = params.tournamentId;
  const [activeTab, setActiveTab] = useState("ongoing");

  const { data: matches, isLoading, isError, error } = useQuery({
    queryKey: ["tournamentMatches", tournamentId, activeTab],
    queryFn: () => fetchTournamentMatches(tournamentId, activeTab),
    enabled: !!tournamentId
  });

  // const tabs = [
  //   { key: "ongoing", label: "Live" },
  //   { key: "upcoming", label: "Upcoming" },
  //   { key: "completed", label: "Past" },
  // ];

  const filteredMatches = matches?.filter(match => {
    if (activeTab === "ongoing") return match.status === "ongoing" || match.status === "live";
    if (activeTab === "upcoming") return match.status === "upcoming";
    if (activeTab === "completed") return match.status === "completed";
    return true;
  }) || [];
  // Transform API data to MatchCard props
  // const transformedMatches = filteredMatches?.map(match => ({
  //   matchId: match._id,
  //   matchNumber: match.matchNumber,
  //   game: match.tournament.name,
  //   logo: match.tournament.logo,
  //   teams: match.teams.map(team => ({
  //     name: team.team.name,
  //     logo: team.team.logo,
  //     score: team.totalPoints
  //   })),
  //   result: match.winner?.name || 'No winner yet'
  // })) || [];

  const transformedMatches = filteredMatches?.map(match => ({
    matchId: match._id,
    matchNumber: match.matchNumber,
    game: match.tournament.name,
    logo: match.tournament.logo,
    teams: match.teams
      .sort((a, b) => b.totalPoints - a.totalPoints) // sort by totalPoints descending
      .slice(0, 3) // take top 3 teams
      .map(team => ({
        name: team.team.name,
        logo: team.team.logo,
        score: team.totalPoints
      })),
    result: match.winner?.name || 'No winner yet'
  })) || [];


  return (
    <div className="w-full mx-auto sm:px-4 lg:px-6 mt-10">
      {/* <div className="flex justify-between bg-[#2a2a2a] rounded-t-lg overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-center py-3 text-sm font-medium transition-colors
              ${activeTab === tab.key
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-300 hover:text-gray-100'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div> */}

      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-6">
          Match details
        </h1>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => <TournamentSkeleton key={i} />)}
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center py-8">
            Error loading matches: {error.message}
          </div>
        ) : transformedMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformedMatches.map((match, index) => (
              <MatchCard
                key={index}
                {...match}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No {activeTab} matches found for this tournament
          </div>
        )}
      </div>
    </div>
  );
}