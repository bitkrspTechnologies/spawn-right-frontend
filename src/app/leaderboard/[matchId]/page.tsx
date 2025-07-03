"use client";

import React from "react";
import Scoreboard from "@/components/Leaderboard/Scoreboard";
import LeaderboardLayout from "@/components/Leaderboard/LeaderboardLayout";
import { useParams } from "next/navigation";

export default function Leaderboard() {
  const params = useParams();

  const matchId = params?.matchId
    ? Array.isArray(params.matchId)
      ? params.matchId[0]
      : params.matchId
    : "";

  if (!matchId) {
    return <div>Match not found</div>;
  }

  return (
    <LeaderboardLayout isMobile={false}>
      <Scoreboard matchId={matchId} />
    </LeaderboardLayout>
  );
}
