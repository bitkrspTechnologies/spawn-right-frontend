"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import TournamentsTabs from "@/components/Tournaments/TournamentsTabs/TournamentsTabs";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";

export default function Tournaments() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <LeaderboardLayout isMobile={isMobile}>
      <TournamentsTabs />
    </LeaderboardLayout>
  );
}
