'use client'
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
import { fetchTournamentSeries } from "@/services/Tournaments";

export default function TournamentsSeries() {
  const params = useParams();
  const tournamentId = params.tournamentId;
  const searchParams = useSearchParams(); 
  const gameName = searchParams.get("game");
  const router = useRouter();

  const { data: matches, isLoading, isError, error } = useQuery({
    queryKey: ["tournamentMatches", tournamentId],
    queryFn: () => fetchTournamentSeries(tournamentId, gameName),
    enabled: !!tournamentId
  });

  const handleCardClick = (series) => {
    const gameKey = gameName || "default";
    const matchIds = series.matches.map(match => match.id).join(',');
    
    router.push(
      `/matches/tournaments/${series.tournament.id}/matches?game=${gameKey}&matchIds=${matchIds}`
    );
  };

  // Determine bracket type color and text
  const getBracketType = (position) => {
    if (position?.part === "GF") return { text: "Grand Final", color: "bg-gradient-to-r from-yellow-500 to-yellow-700" };
    if (position?.part === "LB") return { text: "Lower Bracket", color: "bg-gradient-to-r from-red-500 to-red-700" };
    if (position?.part === "UB") return { text: "Upper Bracket", color: "bg-gradient-to-r from-blue-500 to-blue-700" };
    return { text: "Bracket", color: "bg-gray-600" };
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl pt-2 font-bold mb-8 text-white">Tournament Series</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <TournamentSkeleton key={i} />)}
        </div>
      ) : isError ? (
        <div className="text-red-500 text-center py-8">
          Error loading matches: {error.message}
        </div>
      ) : matches?.data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.data.map((series) => {
            const bracketType = getBracketType(series.bracket_position);
            
            return (
              <div 
                key={series.id}
                className="rounded-xl p-5 bg-white/5 shadow-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-gray-700 group"
                onClick={() => handleCardClick(series)}
              >
                <div className="flex flex-col h-full">
                  {/* Header with bracket type and date */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`${bracketType.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {bracketType.text}
                    </span>
                    <div className="text-xs text-gray-400">
                      {formatDate(series.start)}
                    </div>
                  </div>

                  {/* Title and best of */}
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-white transition-colors line-clamp-2">
                      {series.title}
                    </h2>
                    <div className="flex items-center mt-2">
                      <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-xs font-semibold rounded-full border border-purple-500">
                        Best of {series.best_of}
                      </span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{series.matches.length}</div>
                      <div className="text-xs text-gray-400">Matches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{series.tier}</div>
                      <div className="text-xs text-gray-400">Tier</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {series.coverage.data.live.cv.expectation === 'available' ? '✓' : '?'}
                      </div>
                      <div className="text-xs text-gray-400">Coverage</div>
                    </div>
                  </div>

                  {/* Match IDs preview */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-gray-300">Match IDs</h3>
                      {series.matches.length > 5 && (
                        <span className="text-xs text-gray-500">
                          +{series.matches.length - 5} more
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {series.matches.slice(0, 5).map((match) => (
                        <span 
                          key={match.id}
                          className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
                          title={`Match ID: ${match.id}`}
                        >
                          #{match.id.toString().slice(-4)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-medium mb-2">No tournament series found</h3>
          <p className="text-sm">Check back later for upcoming matches</p>
        </div>
      )}
    </div>
  );
}