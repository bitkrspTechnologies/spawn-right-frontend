"use client";

import { useMediaQuery } from "react-responsive";
import React from "react";
import Scoreboard from "@/components/Leaderboard/Scoreboard";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import { useParams } from "next/navigation";

export default function Leaderboard() {
  const params = useParams();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const matchId = params?.matchId
    ? Array.isArray(params.matchId)
      ? params.matchId[0]
      : params.matchId
    : "";

  if (!matchId) {
    return <div>Match not found</div>;
  }

  return (
    <LeaderboardLayout isMobile={isMobile}>
      <Scoreboard matchId={matchId} />
    </LeaderboardLayout>
  );
}
