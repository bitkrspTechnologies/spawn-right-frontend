"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTournaments } from "../../services/Tournaments";
import { fetchAll } from "@/services/LiveMatches";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getValidLogoUrl } from "@/utils/urlValidator";

// Add these skeleton components at the top of your file
const MatchSkeleton = () => (
  <div
    className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md p-3.5 mb-3"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 animate-pulse">
        <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
        <div className="h-4 bg-gray-600 rounded w-32"></div>
        <div className="h-3 bg-gray-600 rounded w-16"></div>
      </div>
      <div className="h-6 bg-gray-600 rounded w-16"></div>
    </div>
  </div>
);

const TournamentSkeleton = () => (
  <div
    className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4"
  >
    <div className="flex justify-between items-center gap-2 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
        <div className="h-4 bg-gray-600 rounded w-40"></div>
      </div>
      <div className="h-6 bg-gray-600 rounded w-20"></div>
    </div>
  </div>
);

function formatStartDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();
  return `${month} ${day}`;
}

function formatDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startMonth = startDate
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  return `${startMonth} ${startDay} – ${endDay}`;
}

const UpcomingEventsSection = ({ limitMatches = false }) => {

  // Fetch upcoming matches
  const {
    data: matches,
    isLoading: matchesLoading,
    error: matchesError,
  } = useQuery({
    queryKey: ["matches", "upcoming"],
    queryFn: () => fetchAll("upcoming"),
  });

  const {
    data: tournaments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tournaments", "upcoming"],
    queryFn: () => fetchAllTournaments("upcoming","bgmi"),
  });

  if (error)
    return (
      <p className="text-red-500 text-center">Failed to load tournaments.</p>
    );

  console.log("Matches : ", matches);



  return (
    <div className="font-bold flex flex-col lg:flex-row gap-5 justify-center items-start py-8 px-6">
      {/* Left Section - Matches */}
      <div className="flex flex-col flex-1 w-full max-w-2xl">
        <div className="text-white mb-5 text-center">
          <h2 className="text-2xl font-semibold">Upcoming Matches</h2>
          <p className="text-sm font-medium text-white/70">
            "Who's Playing Next? See the Lineup — It's Game Time!"
          </p>
        </div>
        <div className="bg-[var(--card-bg-uc)] rounded-2xl p-5 shadow-lg">
          {matchesLoading ? (
            <>
              <MatchSkeleton />
              <MatchSkeleton />
              <MatchSkeleton />
            </>
          ) : matchesError ? (
            <p className="text-red-500 text-center">Error loading matches</p>
          ) : (
            (limitMatches ? matches?.data?.slice(0, 5) : matches?.data)?.map((match, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md p-4 my-2"
              >
                <div className="flex justify-between items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    {match.logo !== "NA" ? (
                      <Image
                        src={getValidLogoUrl(match.logo)}
                        alt="tournament"
                        width={30}
                        height={30}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-xs">🏆</span>
                      </div>
                    )}
                    <span className="font-medium text-sm">{match?.tournament?.name}</span>
                    <span className="mx-1 text-white/80 ">
                      Match {match.matchNumber}
                    </span>
                  </div>
                  <span className="bg-white text-black text-xs px-3 py-0.5 rounded-xs font-semibold">
                    {formatStartDate(match.startTime)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:flex items-center justify-center h-full">
        <div className="w-0.5 h-100 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full" />
      </div>

      {/* Right Section - Tournaments */}
      <div className="flex flex-col flex-1 w-full max-w-2xl">
        <div className="text-white mb-5 text-center">
          <h2 className="text-2xl font-semibold">Upcoming Tournaments</h2>
          <p className="text-sm font-medium text-white/70">
            "Ready to Compete or Just Watch the Best?"
          </p>
        </div>
        <div className="bg-[var(--card-bg-uc)] rounded-2xl p-5 shadow-lg">
          {isLoading ? (
            <>
              <TournamentSkeleton />
              <TournamentSkeleton />
              <TournamentSkeleton />
            </>
          ) : (
            tournaments?.data?.map((tournament, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md p-4 my-2"
              >
                <div className="flex justify-between items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    {tournament.logo !== "NA" ? (
                      <Image
                        src={getValidLogoUrl(tournament.logo)}
                        alt={`${tournament.name} Logo`}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-xs">🏆</span>
                      </div>
                    )}
                    <span className="font-medium text-sm">{tournament.name}</span>
                  </div>
                  <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
                    {formatDateRange(tournament.start_date, tournament.end_date)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

};

export default UpcomingEventsSection;
