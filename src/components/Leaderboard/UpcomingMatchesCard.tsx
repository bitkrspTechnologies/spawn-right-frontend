"use client";

import React from "react";
import Image from "next/image";

const upcomingMatches = [
  {
    team1: "BAC",
    team2: "SGP",
    logo1: "/images/cod-logo.png",
    logo2: "/images/cod-logo.png",
    gameLogo: "/images/cod-logo.png",
    date: "APR 15–17",
  },
  {
    team1: "BSE",
    team2: "AGG",
    logo1: "/images/cod-logo.png",
    logo2: "/images/cod-logo.png",
    gameLogo: "/images/cod-logo.png",
    date: "APR 15–17",
  },
  {
    team1: "BAC",
    team2: "SGP",
    logo1: "/images/cod-logo.png",
    logo2: "/images/cod-logo.png",
    gameLogo: "/images/cod-logo.png",
    date: "APR 15–17",
  },
  {
    team1: "BAC",
    team2: "SGP",
    logo1: "/images/cod-logo.png",
    logo2: "/images/cod-logo.png", // Note: This path seems incorrect
    gameLogo: "/images/cod.svg",
    date: "APR 15–17",
  },
];

const upcomingTournaments = [
  {
    name: "Savage Impact Championship 2024 female Finals",
    logo: "/images/bgmi.svg",
    gameLogo: "/images/bgmi.svg",
    date: "APR 15–17",
  },
  {
    name: "Orion Tournament",
    logo: "/images/cod-logo.png",
    gameLogo: "/images/cod-logo.png",
    date: "APR 15–17",
  },
  {
    name: "Duel for the Dollars",
    logo: "/images/cod-logo.png",
    gameLogo: "/images/cod.svg",
    date: "APR 15–17",
  },
  {
    name: "Savage Impact Championship 2024 female Finals",
    logo: "/images/cod-logo.png",
    gameLogo: "/images/bgmi.svg",
    date: "APR 15–17",
  },
];

const UpcomingEventsSection = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-8 justify-center  items-start py-10 px-4">
      {/* Matches Section */}
      <div className="bg-[#141324] text-white rounded-2xl p-5 shadow-lg max-w-xl w-full min-h-[500px]">
        <h2 className="text-2xl font-bold mb-2">Upcoming Matches</h2>

        {upcomingMatches.map((match, index) => (
          <div
            key={index}
            className="bg-[#1d1c3a] border border-gray-700 rounded-xl p-5 mb-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={match.logo1} alt="team1" width={24} height={24} />
                <span>{match.team1}</span>
                <span className="text-white font-semibold mx-1">vs</span>
                <Image src={match.logo2} alt="team2" width={24} height={24} />
                <span>{match.team2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src={match.gameLogo} alt="Game" width={28} height={28} />
                <span className="bg-white text-black text-xs px-3 py-1 rounded-sm font-semibold">
                  {match.date}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Arena of Valor International Championship 2024
            </p>
          </div>
        ))}
      </div>
      {/* middle section */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-1 h-100 bg-gradient-to-b from-transparent via-gray-400 to-transparent rounded-full mx-5" />
      </div>

      {/* Tournaments Section */}
      <div className="bg-[#141324] text-white rounded-2xl p-5 shadow-lg max-w-xl w-full min-h-[500px]">
        <h2 className="text-2xl font-bold mb-2">Upcoming Tournaments</h2>
        {/* <p className="text-sm text-gray-400 mb-5">"Ready to Compete or Just Watch the Best?"</p> */}

        {upcomingTournaments.map((tournament, index) => (
          <div
            key={index}
            className="bg-[#1d1c3a] border border-gray-700 rounded-xl p-7 mb-2"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={tournament.logo}
                  alt="Tournament"
                  width={28}
                  height={28}
                />
                <span className="font-medium text-md">{tournament.name}</span>
              </div>
              <div className="flex items-center gap-3 min-w-29">
                <Image
                  src={tournament.gameLogo}
                  alt="Game"
                  width={28}
                  height={28}
                />
                <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
                  {tournament.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
