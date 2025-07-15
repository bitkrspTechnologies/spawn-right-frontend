"use client";

import React from "react";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import TournamentsSeries from "../../../components/Series/TournamentsSeries";
import { useMediaQuery } from "react-responsive";

export default function Matchs() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <LeaderboardLayout isMobile={isMobile}>
      <TournamentsSeries />
    </LeaderboardLayout>
  );
}
