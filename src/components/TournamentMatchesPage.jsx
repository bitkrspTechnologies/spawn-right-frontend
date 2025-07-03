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

  const { data: matches, isLoading, isError, error } = useQuery({
    queryKey: ["tournamentMatches", tournamentId],
    queryFn: () => fetchTournamentMatches(tournamentId),
    enabled: !!tournamentId
  });

  const transformedMatches = matches?.map(match => ({
    matchId: match._id,
    matchNumber: match.matchNumber,
    game: match.tournament?.name || 'Unknown Tournament',
    logo: match.tournament?.logo || '/images/bgmi.svg',
    teams: (match.teams || [])
      .sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0)) // sort by totalPoints descending
      .slice(0, 3) // take top 3 teams
      .map(team => ({
        name: team.team?.name || 'Unknown Team',
        logo: team.team?.logo || '/images/default-team.svg',
        score: team.totalPoints || 0
      })),
    result: match.winner?.name || 'No winner yet'
  })) || [];

  return (
    <div className="w-full mx-auto sm:px-4 lg:px-6 mt-10">
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
            No matches found for this tournament
          </div>
        )}
      </div>
    </div>
  );
}