import React, { useState } from "react";
import Button from "../Button/Button";

interface Player {
  rank: number;
  name: string;
  tier: string;
  wr: string;
  avgScore: number;
  kd: number;
  kr: number;
  headshot: string;
}

const sampleData: Player[] = [
  {
    rank: 1,
    name: "Twitch Notexxd",
    tier: "Diamond",
    wr: "61%",
    avgScore: 336,
    kd: 13,
    kr: 13,
    headshot: "19%",
  },
  {
    rank: 2,
    name: "Twitch Notexxd",
    tier: "Diamond",
    wr: "61%",
    avgScore: 336,
    kd: 13,
    kr: 13,
    headshot: "19%",
  },
  {
    rank: 3,
    name: "Twitch Notexxd",
    tier: "Diamond",
    wr: "61%",
    avgScore: 336,
    kd: 13,
    kr: 13,
    headshot: "19%",
  },
  {
    rank: 4,
    name: "Light",
    tier: "Diamond",
    wr: "61%",
    avgScore: 336,
    kd: 13,
    kr: 13,
    headshot: "19%",
  },
  {
    rank: 5,
    name: "indecision",
    tier: "Diamond",
    wr: "59%",
    avgScore: 309,
    kd: 15,
    kr: 11,
    headshot: "19%",
  },
  {
    rank: 6,
    name: "swissboy",
    tier: "Diamond",
    wr: "68%",
    avgScore: 222,
    kd: 1,
    kr: 0.8,
    headshot: "12%",
  },
  {
    rank: 7,
    name: "Player7",
    tier: "Platinum",
    wr: "68%",
    avgScore: 240,
    kd: 1.7,
    kr: 1.05,
    headshot: "43%",
  },
  {
    rank: 8,
    name: "Player8",
    tier: "Diamond",
    wr: "75%",
    avgScore: 260,
    kd: 2.0,
    kr: 1.2,
    headshot: "45%",
  },
];

const ITEMS_PER_PAGE = 6;

const Scoreboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = sampleData.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const rankStyles = (rank: number) => {
    if (rank === 1)
      return "bg-yellow-400 text-white font-bold rounded-l-full pl-2";
    if (rank === 2)
      return "bg-gray-300 text-black font-bold rounded-l-full pl-2";
    if (rank === 3)
      return "bg-orange-500 text-white font-bold rounded-l-full pl-2";
    return "text-white pl-2";
  };

  return (
    <div className="p-6 text-white min-h-screen bg-transparent">
      {/* Search & Filters */}
      <div className="flex flex-wrap gap-5 mb-8 justify-start font-[roboto]">
        <input
          type="text"
          placeholder="Search a player by name..."
          className="px-4 py-2 rounded-sm bg-[#1c1c3a] text-white placeholder-gray-400 border border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="px-9 py-1 rounded-sm bg-[#1c1c3a] border border-gray-600">
          * &nbsp; Region ▼
        </button>
        <button className="px-9 py-1 rounded-sm bg-[#1c1c3a] border border-gray-600">
          * &nbsp; Rank ▼
        </button>
      </div>

      {/* Table Header */}
      <div className="w-full max-w-5xl mx-auto rounded-sm overflow-hidden">
        <div className="grid grid-cols-12 py-3 text-xs uppercase text-center text-gray-300 bg-white/10 backdrop-blur-md  mb-4">
          <div>Rank</div>
          <div className="col-span-2">Player Name</div>
          <div>Tier</div>
          <div>WR</div>
          <div>Avg Score</div>
          <div>KD</div>
          <div>KR</div>
          <div>Headshot</div>
        </div>

        {/* Table Rows */}
        {paginatedData.map((player) => (
          <div
            key={player.rank}
            className="grid grid-cols-12 py-3 text-xs text-center text-gray-300 bg-white/10 backdrop-blur-md backdrop-saturate-150 mb-4"
          >
            <div className={rankStyles(player.rank)}>
              {player.rank <= 3 ? `${player.rank}st` : player.rank}
            </div>
            <div className="col-span-2">{player.name}</div>
            <div>💠</div>
            <div className="text-cyan-400">{player.wr}</div>
            <div className="text-cyan-400">{player.avgScore}</div>
            <div className="text-green-400">{player.kd}</div>
            <div className="text-green-400">{player.kr}</div>
            <div>{player.headshot}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Button
          text="Show More"
          className="hover:scale-105 transition-transform"
        />
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-6 space-x-3 text-lg font-[roboto-serif]">
        <button
          onClick={() => handlePageChange(1)}
          className="w-10 h-10 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center"
        >
          &#171;
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center"
        >
          &#8249;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-sm flex items-center justify-center ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-white/10 backdrop-blur-md"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center"
        >
          &#8250;
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center"
        >
          &#187;
        </button>
      </div> */}
    </div>
  );
};

export default Scoreboard;
