"use client";

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTournaments } from "../../services/Tournaments";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getValidLogoUrl } from "@/utils/urlValidator";

// Add these skeleton components at the top of your file
const MatchSkeleton = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`bg-white/10 backdrop-blur-md border rounded-md ${isMobile ? "p-2 mb-3" : "p-3.5 mb-3"}`}
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

const TournamentSkeleton = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`bg-white/10 backdrop-blur-md border ${isMobile ? "rounded-lg px-3 py-2 mb-2" : "rounded-sm p-3 mb-4"}`}
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

function formatStartDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();
  return `${month} ${day}`;
}

const upcomingTournaments = [
  {
    name: "Savage Impact Championship 2024 female Finals",
    logo: "/images/bgmi.svg",
    gameLogo: "/images/bgmi.svg",
    date: "APR 15–17",
  },
  {
    name: "Orion Tournament",
    logo: "/images/cod.svg",
    gameLogo: "/images/cod.svg",
    date: "APR 15–17",
  },
  {
    name: "Duel for the Dollars",
    logo: "/images/cod.svg",
    gameLogo: "/images/cod.svg",
    date: "APR 15–17",
  },
  {
    name: "Savage Impact Championship 2024 female Finals",
    logo: "/images/cod.svg",
    gameLogo: "/images/cod.svg",
    date: "APR 15–17",
  },
];

function formatDateRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startMonth = startDate
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  return `${startMonth} ${startDay} – ${endDay}`;
}

const UpcomingEventsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Fetch upcoming matches
  const {
    data: matches,
    isLoading: matchesLoading,
    error: matchesError,
  } = useQuery({
    queryKey: ["upcomingMatches"],
    queryFn: () => fetchAllTournaments("completed"),
  });

  const {
    data: tournaments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tournaments", "completed"],
    queryFn: () => fetchAllTournaments("completed"),
  });

  console.log("matches", matches);
  console.log("tournaments", tournaments);

  if (error)
    return (
      <p className="text-red-500 text-center">Failed to load tournaments.</p>
    );

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 px-0 py-2 text-white">
        {/* Matches */}
        <div className="">
          {matchesLoading ? (
            <>
              <MatchSkeleton isMobile />
              <MatchSkeleton isMobile />
              <MatchSkeleton isMobile />
            </>
          ) : matchesError ? (
            <p className="text-red-500 text-center">Error loading matches</p>
          ) : (
            matches?.data?.map((match: any, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md p-2 mb-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-xs gap-1">
                      <Image
                        src={getValidLogoUrl(match.logo)}
                        alt="tournament"
                        width={20}
                        height={20}
                      />
                      <span className="font-bold">{match.name}</span>
                      <span className="mx-1 text-white/80 font-semibold">
                        Match {match.matchNumber}
                      </span>
                    </div>
                    <span className="bg-white text-black text-xs px-3 py-0.5 rounded-xs font-semibold">
                      {formatStartDate(match.start_date)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Tournaments */}

        <div className="">
          {isLoading ? (
            <>
              <TournamentSkeleton isMobile />
              <TournamentSkeleton isMobile />
              <TournamentSkeleton isMobile />
            </>
          ) : (
            upcomingTournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-lg px-3 py-2 mb-2"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-2 text-xs flex-1 min-w-0">
                    <Image
                      src={tournament.logo}
                      alt="Tournament"
                      width={18}
                      height={18}
                    />
                    <span className="font-medium break-words whitespace-normal">
                      {tournament.name}
                    </span>
                  </div>
                  <span className="bg-white text-black text-[10px] px-2 py-0.5 rounded-xs font-semibold whitespace-nowrap">
                    {tournament.date}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="font-bold flex flex-col lg:flex-row gap-8 justify-center items-start py-5 px-4">
      {/* Left Section - Matches */}
      <div className="flex flex-col flex-1 w-full">
        <div className="bg-[var(--card-bg-uc)] rounded-xl p-2 shadow-lg">
          {matchesLoading ? (
            <>
              <MatchSkeleton />
              <MatchSkeleton />
              <MatchSkeleton />
            </>
          ) : matchesError ? (
            <p className="text-red-500 text-center">Error loading matches</p>
          ) : (
            matches?.data?.map((match: any, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md p-3.5 mb-3"
              >
                <div className="flex justify-between items-center mb-2 ">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-xs gap-1">
                      <Image
                        src={getValidLogoUrl(match.logo)}
                        alt="tournament"
                        width={20}
                        height={20}
                      />
                      <span className="font-bold">{match.name}</span>
                      <span className="mx-1 text-white/80 font-semibold">
                        Match {match.matchNumber}
                      </span>
                    </div>
                    <span className="bg-white text-black text-xs px-3 py-0.5 rounded-xs font-semibold">
                      {formatStartDate(match.start_date)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Section - Tournaments */}
      <div className="flex flex-col flex-1 w-full">
        <div className="bg-[var(--card-bg-uc)] rounded-2xl p-5 shadow-lg w-full">
          {isLoading ? (
            <>
              <TournamentSkeleton />
              <TournamentSkeleton />
              <TournamentSkeleton />
            </>
          ) : (
            tournaments?.data?.map(
              (
                tournament: {
                  logo: string | StaticImport;
                  name: React.ReactNode;
                  start_date: string;
                  end_date: string;
                },
                index: React.Key
              ) => (
                <div
                  key={index}
                  className="font-[roboto_serif] bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <div className="flex items-center text-md gap-2">
                      {tournament.logo !== "NA" ? (
                        <Image
                          src={tournament.logo}
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
                      <span className="font-medium text-md">
                        {tournament.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 min-w-29">
                      {tournament.logo !== "NA" ? (
                        <Image
                          src={tournament.logo}
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
                      <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
                        {formatDateRange(
                          tournament.start_date,
                          tournament.end_date
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
