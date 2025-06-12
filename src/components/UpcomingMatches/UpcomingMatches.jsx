"use client";

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTournaments } from "../../services/Tournaments";
import { fetchAll } from "@/services/LiveMatches";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getValidLogoUrl } from "@/utils/urlValidator";

// Add these skeleton components at the top of your file
const MatchSkeleton = ({ isMobile = false }) => (
  <div
    className={`bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-md ${isMobile ? "p-2 mb-3" : "p-3.5 mb-3"}`}
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

const TournamentSkeleton = ({ isMobile = false }) => (
  <div
    className={`bg-white/10 backdrop-blur-md border border-[var(--border-card)] ${isMobile ? "rounded-lg px-3 py-2 mb-2" : "rounded-sm p-3 mb-4"}`}
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

const UpcomingEventsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    queryFn: () => fetchAllTournaments("upcoming"),
  });

  if (error)
    return (
      <p className="text-red-500 text-center">Failed to load tournaments.</p>
    );

  console.log("Matches : ", matches);

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 px-0 py-2 text-white">
        {/* Matches */}
        <div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-normal">Upcoming Matches</h2>
            <p className="text-sm font-semibold text-white/80">
              "Who's Playing Next? See the Lineup — It's Game Time!"
            </p>
          </div>
          <div className="bg-[var(--card-bg-uc)] rounded-xl p-2 shadow-lg">
            {matchesLoading ? (
              <>
                <MatchSkeleton isMobile />
                <MatchSkeleton isMobile />
                <MatchSkeleton isMobile />
              </>
            ) : matchesError ? (
              <p className="text-red-500 text-center">Error loading matches</p>
            ) : (
              matches?.data?.map((match, index) => (
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
                        <span className="font-bold">{match?.tournament?.name}</span>
                        <span className="mx-1 text-white/80 font-semibold">
                          Match {match.matchNumber}
                        </span>
                      </div>
                      <span className="bg-white text-black text-xs px-3 py-0.5 rounded-xs font-semibold">
                        {formatStartDate(match.startTime)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Tournaments */}
        <div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-normal">Upcoming Tournaments</h2>
            <p className="text-sm font-semibold text-white/80">
              "Ready to Compete or Just Watch the Best?"
            </p>
          </div>
          <div className="bg-[var(--card-bg-uc)] rounded-2xl p-3 shadow-lg">
            {isLoading ? (
              <>
                <TournamentSkeleton isMobile />
                <TournamentSkeleton isMobile />
                <TournamentSkeleton isMobile />
              </>
            ) : (
              tournaments?.data?.map((tournament, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-lg px-3 py-2 mb-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2 text-xs flex-1 min-w-0">
                      <Image
                        src={getValidLogoUrl(tournament.logo)}
                        alt={`${tournament.name} Logo`}
                        width={30}
                        height={30}
                      />
                      <span className="font-medium break-words whitespace-normal">
                        {tournament.name}
                      </span>
                    </div>
                    <span className="bg-white text-black text-[10px] px-2 py-0.5 rounded-xs font-semibold whitespace-nowrap">
                      {formatDateRange(
                        tournament.start_date,
                        tournament.end_date
                      )}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  // return (
  //   <div className="font-bold flex flex-col lg:flex-row gap-8 justify-center items-start py-5 px-4">
  //     {/* Left Section - Matches */}
  //     <div className="flex flex-col flex-1 w-full">
  //       <div className="text-white mb-6 text-center">
  //         <h2 className="text-2xl font-normal">Upcoming Matches</h2>
  //         <p className="text-md font-semibold text-white/80">
  //           "Who's Playing Next? See the Lineup — It's Game Time!"
  //         </p>
  //       </div>
  //       <div className="bg-[var(--card-bg-uc)] rounded-2xl p-5 shadow-lg w-full">
  //         {matchesLoading ? (
  //           <>
  //             <MatchSkeleton />
  //             <MatchSkeleton />
  //             <MatchSkeleton />
  //           </>
  //         ) : matchesError ? (
  //           <p className="text-red-500 text-center">Error loading matches</p>
  //         ) : (
  //           matches?.data?.map((match, index) => (
  //             <div
  //               key={index}
  //               className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4"
  //             >
  //               <div className="flex flex-col sm:flex-row justify-between gap-2 items-center">
  //                 <div className="flex justify-center items-center text-md gap-2">
  //                   {match.logo !== "NA" ? (
  //                     <Image
  //                       src={getValidLogoUrl(match.logo)}
  //                       alt="tournament"
  //                       width={30}
  //                       height={30}
  //                       className="flex justify-center items-center"
  //                     />
  //                   ) : (
  //                     <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
  //                       <span className="text-xs">🏆</span>
  //                     </div>
  //                   )}
  //                   <span className="font-medium text-md">
  //                     {match.name}
  //                   </span>
  //                 </div>
  //                 <div className="flex justify-center items-center gap-3 min-w-29">

  //                   <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
  //                     {formatStartDate(match.start_date)}
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           ))
  //         )}
  //       </div>
  //     </div>

  //     {/* Vertical Divider */}
  // <div className="hidden lg:flex items-center justify-center h-full">
  //   <div className="w-0.5 h-100 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full" />
  // </div>

  //     {/* Right Section - Tournaments */}
  //     <div className="flex flex-col flex-1 w-full">
  //       <div className="text-white mb-6 text-center">
  //         <h2 className="text-2xl font-normal">Upcoming Tournaments</h2>
  //         <p className="text-md font-semibold text-white/80">
  //           "Ready to Compete or Just Watch the Best?"
  //         </p>
  //       </div>
  //       <div className="bg-[var(--card-bg-uc)] rounded-2xl p-5 shadow-lg w-full">
  //         {isLoading ? (
  //           <>
  //             <TournamentSkeleton />
  //             <TournamentSkeleton />
  //             <TournamentSkeleton />
  //           </>
  //         ) : (
  //           tournaments?.data?.map(
  //             (
  //               tournament,
  //               index
  //             ) => (
  //               <div
  //                 key={index}
  //                 className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4"
  //               >
  //                 <div className="flex flex-col sm:flex-row justify-between gap-2">
  //                   <div className="flex items-center text-md gap-2">
  //                     {tournament.logo !== "NA" ? (
  //                       <Image
  //                         src={getValidLogoUrl(tournament.logo)}
  //                         alt={`${tournament.name} Logo`}
  //                         width={30}
  //                         height={30}
  //                         className="rounded-full"
  //                       />
  //                     ) : (
  //                       <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
  //                         <span className="text-xs">🏆</span>
  //                       </div>
  //                     )}
  //                     <span className="font-medium text-md">
  //                       {tournament.name}
  //                     </span>
  //                   </div>
  //                   <div className="flex items-center gap-3 min-w-29">
  //                     {tournament.logo !== "NA" ? (
  //                       <Image
  //                         src={getValidLogoUrl(tournament.logo)}
  //                         alt={`${tournament.name} Logo`}
  //                         width={30}
  //                         height={30}
  //                         className="rounded-full"
  //                       />
  //                     ) : (
  //                       <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
  //                         <span className="text-xs">🏆</span>
  //                       </div>
  //                     )}
  //                     <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
  //                       {formatDateRange(
  //                         tournament.start_date,
  //                         tournament.end_date
  //                       )}
  //                     </span>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           )
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

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
            matches?.data?.map((match, index) => (
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
