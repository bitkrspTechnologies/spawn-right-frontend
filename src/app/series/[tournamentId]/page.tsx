"use client";

import React from "react";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import TournamentsSeries from "../../../components/Series/TournamentsSeries";

export default function Matchs() {
  return (
    <LeaderboardLayout isMobile={false}>
    <TournamentsSeries/>
    </LeaderboardLayout>
  );
}
