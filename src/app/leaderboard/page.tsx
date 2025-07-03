"use client";

import React from "react";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import AllLeaderboardMatches from "@/components/Leaderboard/AllLeaderboardMatches";

export default function Leaderboard() {
  return (
    <LeaderboardLayout isMobile={false}>
      <AllLeaderboardMatches />
    </LeaderboardLayout>
  );
}
