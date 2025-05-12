import React from 'react';

const GlobalLeaderboardCard: React.FC = () => {
  return (
    <div className="font-[roboto] max-w-lg pr-9 p-7 pb-16 rounded-xl bg-gradient-to-br from-[#29213b] to-[#1f1b2e] text-white shadow-lg border border-purple-700">
      <h2 className="text-xl font-semibold mb-4">Global Leaderboard</h2>
      <p className="text-sm text-gray-300 mb-8 mr-10">
        Check out the current leaderboard for every region in BGMI. Explore up-to-date
        information on the best BGMI players in the world: tiers, main agents, combat scores,
        KD ratios, headshot percentages, and more.
      </p>
      <div className="flex justify-start text-sm font-medium text-gray-200">
        <span>Total Players: <span className="text-white font-semibold">116,730</span></span> &nbsp;&nbsp;&nbsp;
        <span>Last Update: <span className="text-white font-semibold">36 minutes ago</span></span>
      </div>
    </div>
  );
};

export default GlobalLeaderboardCard;
