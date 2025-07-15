"use client";

import React from "react";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import AllLeaderboardMatches from "@/components/Leaderboard/AllLeaderboardMatches";
import { useMediaQuery } from "react-responsive";

export default function Leaderboard() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <LeaderboardLayout isMobile={isMobile}>
      <AllLeaderboardMatches />
    </LeaderboardLayout>
  );
}
