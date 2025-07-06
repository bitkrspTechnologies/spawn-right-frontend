'use client'
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import TournamentSkeleton from "@/components/Skeleton/TournamentSkeleton";
// import MatchCard from "@/components/common/MatchCardInclude";
import { fetchTournamentSeries } from "@/services/Tournaments";

export default function TournamentsSeries() {
  const params = useParams();
  const tournamentId = params.tournamentId;
  const searchParams = useSearchParams(); 
  const gameName = searchParams.get("game");

  const { data: matches, isLoading, isError, error } = useQuery({
    queryKey: ["tournamentMatches", tournamentId],
    queryFn: () => fetchTournamentSeries(tournamentId,gameName),
    enabled: !!tournamentId
  });

  // Transform the matches data for display
  const transformedMatches = matches?.data?.map(match => ({
    id: match.id,
    title: match.title,
    bestOf: match.best_of,
    tier: match.tier,
    bracketPosition: match.bracket_position,
    gameVersion: match.game_version?.release?.description,
    matches: match.matches.map(m => m.id),
    coverage: {
      live: match.coverage.data.live.cv.expectation,
      postgame: match.coverage.data.postgame.server.expectation
    },
    createdAt: new Date(match.created_at).toLocaleDateString()
  })) || [];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl pt-2 font-bold mb-6 text-white">Tournament Series</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <TournamentSkeleton key={i} />)}
        </div>
      ) : isError ? (
        <div className="text-red-500 text-center py-8">
          Error loading matches: {error.message}
        </div>
      ) : matches?.data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {matches.data.map((series) => (
            <div 
              key={series.id}
              className="rounded-lg p-5 bg-white/5 shadow-lg "
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-lg font-semibold text-white line-clamp-2">
                      {series.title}
                    </h2>
                    <div className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {new Date(series.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-600 text-xs rounded-full">
                      Tier {series.tier}
                    </span>
                    <span className="px-2 py-1 bg-purple-600 text-xs rounded-full">
                      Bo{series.best_of}
                    </span>
                    {series.game_version?.release?.description && (
                      <span className="px-2 py-1 bg-green-600 text-xs rounded-full line-clamp-1">
                        {series.game_version.release.description}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-300 mb-2">Coverage</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-1">Live:</span> 
                        <span className={`${
                          series.coverage.data.live.cv.expectation === 'available' 
                            ? 'text-green-400' 
                            : 'text-yellow-400'
                        }`}>
                          {series.coverage.data.live.cv.expectation}
                        </span>
                      </div>
                    
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Match IDs</h3>
                  <div className="flex flex-wrap gap-2">
                    {series.matches.slice(0, 4).map((match) => (
                      <span 
                        key={match.id}
                        className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                        title={`Match ID: ${match.id}`}
                      >
                        #{match.id.toString().slice(-4)}
                      </span>
                    ))}
                    {series.matches.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                        +{series.matches.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 bg-gray-800 rounded-lg">
          No tournament series found
        </div>
      )}
    </div>
  );
}