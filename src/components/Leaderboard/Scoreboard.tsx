import React, { useState } from "react";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleMatchLeadboard } from "@/services/LiveMatches";

interface Team {
  id: string;
  name: string;
}

interface TeamScore {
  team: Team;
  position: number;
  placementPoints: number;
  kills: number;
  totalPoints: number;
}

interface MatchLeaderboardResponse {
  data: {
    teams: TeamScore[];
  };
}

interface ScoreboardTeam {
  rank: number;
  teamName: string;
  pp: number;
  fp: number;
  total: number;
}

const Scoreboard = ({ matchId }: { matchId: string | number }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleTeams, setVisibleTeams] = useState<number>(5);

  const { data, isLoading, error, isFetching } =
    useQuery<MatchLeaderboardResponse>({
      queryKey: ["matchLeaderboard", matchId],
      queryFn: () => fetchSingleMatchLeadboard(matchId),
      staleTime: 1000 * 60 * 5, // 5 minutes
    });

  // Transform API data to the format needed by the component
  const transformData = (
    data: MatchLeaderboardResponse | undefined
  ): ScoreboardTeam[] => {
    if (!data?.data?.teams) return [];

    return data.data.teams.map((team) => ({
      rank: team.position,
      teamName: team.team?.name || 'Unknown Team',
      pp: team.placementPoints,
      fp: team.kills,
      total: team.totalPoints,
    }));
  };

  const transformedData = transformData(data);
  const filteredData = transformedData.filter((team) =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rankStyles = (rank: number): string => {
    if (rank === 1)
      return "bg-yellow-400 text-white font-bold rounded-l-full pl-2";
    if (rank === 2)
      return "bg-gray-300 text-black font-bold rounded-l-full pl-2";
    if (rank === 3)
      return "bg-orange-500 text-white font-bold rounded-l-full pl-2";
    return "text-white pl-2";
  };

  const handleShowMore = (): void => {
    setVisibleTeams((prev) => Math.min(prev + 5, filteredData.length));
  };

  const teamsToShow = filteredData.slice(0, visibleTeams);
  const hasMoreTeams = visibleTeams < filteredData.length;
  const isLoadingData = isLoading || isFetching;

  // Skeleton Loading Component
  const SkeletonRow = ({ index }: { index: number }) => (
    <div
      className="grid grid-cols-12 py-2 text-xs text-center bg-white/5 backdrop-blur-md mb-4 animate-pulse"
      key={`skeleton-${index}`}
    >
      <div className="h-5 bg-gray-700 rounded m-1"></div>
      <div
        className="col-span-4 h-5 bg-gray-700 rounded m-1"
      ></div>
      <div className="h-5 bg-gray-700 rounded m-1"></div>
      <div className="h-5 bg-gray-700 rounded m-1"></div>
      <div
        className="col-span-2 h-5 bg-gray-700 rounded m-1"
      ></div>
    </div>
  );

  if (error) {
    return (
      <div className="text-white text-center py-8">
        Error loading leaderboard: {(error as Error).message}
      </div>
    );
  }

  return (
    <div
      className="p-4 p-6 text-white bg-transparent max-w-[1200px] w-full mx-auto"
    >
      {/* Search Input */}
      <div
        className="flex flex-wrap gap-3 mb-6 justify-start"
      >
        <input
          type="text"
          placeholder="Search a team by name..."
          className="px-4 py-2 rounded-sm bg-[#1c1c3a] text-white placeholder-gray-400 border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleTeams(5);
          }}
          disabled={isLoadingData}
        />
      </div>

      {/* Table Container */}
      <div className="w-full mx-auto rounded-sm overflow-hidden">
        {/* Table Header */}
        <div
          className="grid grid-cols-12 py-3 text-xs uppercase text-center text-gray-300 bg-white/10 backdrop-blur-md mb-4"
        >
          <div className="font-semibold">Rank</div>
          <div
            className="col-span-4 font-semibold"
          >
            Team Name
          </div>
          <div className="font-semibold">PP</div>
          <div className="font-semibold">FP</div>
          <div
            className="col-span-2 font-semibold"
          >
            Total
          </div>
        </div>

        {/* Loading State */}
        {isLoadingData && (
          <div className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <SkeletonRow key={`skeleton-${index}`} index={index} />
            ))}
          </div>
        )}

        {/* Data State */}
        {!isLoadingData && (
          <>
            {teamsToShow.length > 0 ? (
              <>
                {teamsToShow.map((team) => (
                  <div
                    key={`${team.rank}-${team.teamName}`}
                    className="grid grid-cols-12 py-3 text-xs text-center text-gray-300 bg-white/10 hover:bg-white/20 backdrop-blur-md backdrop-saturate-150 mb-4 transition-colors"
                  >
                    <div className={rankStyles(team.rank)}>
                      {team.rank <= 3 ? `${team.rank}st` : team.rank}
                    </div>
                    <div
                      className="col-span-4"
                      title={team.teamName}
                    >
                      {team.teamName}
                    </div>
                    <div>{team.pp}</div>
                    <div>{team.fp}</div>
                    <div
                      className="col-span-2 font-medium"
                    >
                      {team.total}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-8 text-gray-400">
                No teams found matching your search
              </div>
            )}
          </>
        )}
      </div>

      {/* Show More Button */}
      {!isLoadingData && hasMoreTeams && (
        <div className="flex justify-center items-center mt-6">
          <Button
            text="Show More"
            onClick={handleShowMore}
            className="hover:scale-105 transition-transform px-6 py-2"
            // disabled={isLoadingData}
          />
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
