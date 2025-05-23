"use client";

import Image from "next/image";

export default function MatchCard({ tournament }) {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getMatchStatus = () => {
    const now = new Date();
    const startDate = new Date(tournament.start_date);
    const endDate = new Date(tournament.end_date);

    if (now < startDate) return "Upcoming";
    if (now > endDate) return "Completed";
    return "Live";
  };

  return (
    <div className="max-w-lg w-full rounded-xl border border-white/70 p-4 text-white shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md backdrop-saturate-150">
      {/* 🔷 Section 1: Header & Tournament Info */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>{getMatchStatus()}</span>
            <span className="text-xl">●</span>
            <span>{tournament.location}</span>
          </div>
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
        </div>

        {/* Tournament Name and Prize Pool */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-1">{tournament.name}</h3>
          <p className="text-sm text-gray-300">
            Prize Pool: {tournament.prize_pool.toLocaleString()}{" "}
            {tournament.currency}
          </p>
        </div>

        {/* Dates */}
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-gray-300">Start:</span>
            <span>{formatDate(tournament.start_date)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">End:</span>
            <span>{formatDate(tournament.end_date)}</span>
          </div>
        </div>

        {/* Stages */}
        {tournament.stages && tournament.stages.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Stages:</h4>
            <ul className="space-y-1 text-sm">
              {tournament.stages.map((stage, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-300">{stage.name}</span>
                  <span>{formatDate(stage.start_date)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 🔷 Section 2: Divider */}
      <div className="border-t border-white/70 mt-3 -mx-4" />

      {/* 🔷 Section 3: Stream and Details */}
      <div className="flex justify-between mt-3">
        {tournament.streams && tournament.streams.length > 0 && (
          <a
            href={tournament.streams[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-sm hover:underline"
          >
            Watch on {tournament.streams[0].platform}
          </a>
        )}
        <button className="text-white text-sm hover:underline">
          Leaderboard
        </button>
      </div>
    </div>
  );
}
