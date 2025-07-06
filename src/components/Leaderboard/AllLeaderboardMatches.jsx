import { fetchAll } from "@/services/LiveMatches";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const AllLeaderboardMatches = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["live-matches"],
    queryFn: () => fetchAll("completed"),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen text-white p-4 sm:px-6 lg:px-8 pt-5">
        <h1 className="text-2xl font-bold mb-6">Match Results</h1>

        {/* Desktop Skeleton */}
        <div className="hidden lg:block space-y-3">
          <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-800 rounded-lg">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-700 rounded animate-pulse"
              ></div>
            ))}
          </div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 items-center px-4 py-3 bg-gray-800 rounded-lg"
            >
              {[...Array(12)].map((_, j) => (
                <div
                  key={j}
                  className="h-5 bg-gray-700 rounded animate-pulse"
                ></div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Skeleton */}
        <div className="lg:hidden space-y-3">
          <div className="grid grid-cols-5 gap-2 px-3 py-2 bg-gray-800 rounded-lg">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-700 rounded animate-pulse"
              ></div>
            ))}
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-3 bg-gray-800 rounded-lg space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className="h-5 bg-gray-700 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, j) => (
                  <div
                    key={j}
                    className="h-4 bg-gray-700 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className=" text-white p-4 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl font-bold mb-4">Match Results</h1>
        <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg max-w-md text-center">
          <p className="font-medium">Error loading matches</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      </div>
    );
  }

  const matches = data?.data || [];

  return (
    <div className=" text-white p-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="text-2xl font-bold mb-6">Match Results</h1>

      {/* Desktop Table */}
      <div className="hidden lg:block space-y-2">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-white/5 p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm rounded-lg text-gray-300 font-medium text-sm">
          <div className="col-span-1">Match</div>
          <div className="col-span-3">Tournament</div>
          <div className="col-span-1 text-center">Stage</div>
          <div className="col-span-1 text-center">Map</div>
          <div className="col-span-2 text-center">Date & Time</div>
          <div className="col-span-1 text-center">Teams</div>
          <div className="col-span-3 text-center">Winner</div>
        </div>

        {/* Match Rows */}
        {matches.map((match) => (
          <Link
            href={`/leaderboard/${match._id}`}
            key={match._id}
            className="grid grid-cols-12 gap-4 items-center px-4 py-3 bg-white/5 rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm  hover:bg-gray-750"
          >
            <div className="col-span-1 font-medium">{match.matchNumber}</div>
            <div className="col-span-3 truncate">
              <p className="font-medium">{match.tournament?.name || 'Unknown Tournament'}</p>
              <p className="text-gray-400 text-sm">
                {match.tournament?.organizer || 'Unknown Organizer'}
              </p>
            </div>
            <div className="col-span-1 text-center text-sm">{match.stage || 'N/A'}</div>
            <div className="col-span-1 text-center font-medium">
              {match.map || 'N/A'}
            </div>
            <div className="col-span-2 text-center">
              <p>{match.date ? new Date(match.date).toLocaleDateString() : 'N/A'}</p>
              <p className="text-gray-400 text-sm">
                {match.startTime ? new Date(match.startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }) : 'N/A'}
              </p>
            </div>
            <div className="col-span-1 text-center">
              <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">
                {match.teams?.length || 0}
              </span>
            </div>
            <div className="col-span-3 text-center">
              {match.winner ? (
                <span className="bg-green-900/50 px-3 py-1 rounded-full text-sm font-medium">
                  {
                    match.teams?.find((t) => t.team?._id === match.winner)?.team
                      ?.name || 'Unknown Team'
                  }
                </span>
              ) : (
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  TBD
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Table */}
      <div className="lg:hidden space-y-3">
        {matches.map((match) => (
          <div
            key={match._id}
            className="bg-white/5 p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm rounded-lg hover:bg-gray-750 "
          >
            <Link href={`/leaderboard/${match._id}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">
                    Match #{match.matchNumber}
                  </h3>
                  <p className="text-gray-400 text-sm">{match.tournament?.name || 'Unknown Tournament'}</p>
                </div>
                <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                  {match.teams?.length || 0} teams
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-gray-400 text-sm">Stage</p>
                  <p className="font-medium">{match.stage || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Map</p>
                  <p className="font-medium">{match.map || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="font-medium">
                    {match.date ? new Date(match.date).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Time</p>
                  <p className="font-medium">
                    {match.startTime ? new Date(match.startTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }) : 'N/A'}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-1">Winner</p>
                {match.winner ? (
                  <p className="font-medium text-green-400">
                    {
                      match.teams?.find((t) => t.team?._id === match.winner)?.team
                        ?.name || 'Unknown Team'
                    }
                  </p>
                ) : (
                  <p className="font-medium text-gray-400">To be determined</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {matches.length === 0 && (
        <div className="rounded-lg p-8 text-center flex justify-center items-center">
          <p className="text-gray-400">No ongoing matches found</p>
        </div>
      )}
    </div>
  );
};

export default AllLeaderboardMatches;
