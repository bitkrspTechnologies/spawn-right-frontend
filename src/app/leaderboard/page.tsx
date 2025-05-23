"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import AllLeaderboardMatches from "@/components/Leaderboard/AllLeaderboardMatches";

export default function Leaderboard() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <LeaderboardLayout isMobile={isMobile}>
      <AllLeaderboardMatches />
    </LeaderboardLayout>
  );
}
