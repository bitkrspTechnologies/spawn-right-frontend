import React from "react";

interface Match {
    team1: string;
    team1Logo: string;
    team2: string;
    team2Logo: string;
    score: string;
    date: string;
    round: string;

}

interface Tournament {
    name: string;
    prize: string;
    teams: number;
    dateRange: string;
    matches: Match[];
    colorClass?: string;
}

const tournaments: Tournament[] = [
    {
        name: "OPEN 2025 Season 1",
        prize: "$400,000",
        teams: 16,
        dateRange: "APR 15-17",
        colorClass: "text-pink-400",

        matches: [
            {
                round: "GRAND FINAL",
                date: "MAR 30",
                team1: "Vitality",
                team1Logo: "🟡",
                team2: "MOUZ",
                team2Logo: "🔴",
                score: "3 - 2",
            },
            {
                round: "SEMI FINAL 2",
                date: "MAR 29",
                team1: "Vitality",
                team1Logo: "🟡",
                team2: "Spirit",
                team2Logo: "⚪",
                score: "2 - 1",
            },
            {
                round: "SEMI FINAL 1",
                date: "MAR 26",
                team1: "Eternal Fi...",
                team1Logo: "♾️",
                team2: "MOUZ",
                team2Logo: "🔴",
                score: "0 - 2",
            },
        ],
    },
    {
        name: "BOUNTY 2025 Season 1",
        prize: "$400,000",
        teams: 16,
        dateRange: "APR 15-17",
        colorClass: "text-blue-400",

        matches: [
            {
                round: "GRAND FINAL",
                date: "FEB 15",
                team1: "Vitality",
                team1Logo: "🟡",
                team2: "MOUZ",
                team2Logo: "🔴",
                score: "3 - 2",
            },
            {
                round: "SEMI FINAL 2",
                date: "FEB 18",
                team1: "Natus",
                team1Logo: "🟡",
                team2: "Spirit",
                team2Logo: "⚪",
                score: "2 - 1",
            },
            {
                round: "SEMI FINAL 1",
                date: "FEB 19",
                team1: "G2",
                team1Logo: "⚫",
                team2: "Eternal Fi...",
                team2Logo: "♾️",
                score: "0 - 2",
            },
        ],
    },
];

const TournamentBracket: React.FC = () => {
    return (
        <div className=" font-[roboto] flex gap-4 bg-[#0b0d16] p-6 rounded-xl text-white">
            {tournaments.map((tournament) => (
                <div
                    key={tournament.name}
                    className="bg-[#131626] rounded-xl p-4 w-full max-w-md"
                >
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-bold">{tournament.name}</h2>
                            <div className={`text-sm ${tournament.colorClass}`}>
                                {tournament.prize} &nbsp;&nbsp; | &nbsp;&nbsp; {tournament.teams} TEAMS
                            </div>

                        </div>
                        <div className="bg-white text-sm text-black px-2 py-1 rounded-md">
                            {tournament.dateRange}
                        </div>
                    </div>

                    {tournament.matches.map((match, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-xs text-gray mb-1">
                                {match.round} <span className="float-right">{match.date}</span>
                            </div>
                            <div className="bg-[#1b1e2d] p-3 rounded-md grid grid-cols-3 items-center text-sm">
                                <div className="flex items-center justify-end  gap-1 truncate">
                                    <span>{match.team1}</span>
                                    <span>{match.team1Logo}</span>

                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-[#253054] px-2 py-1 rounded font-bold">
                                        {match.score}
                                    </div>
                                </div>
                                <div className="flex items-center  gap-1 truncate">
                                    <span>{match.team2Logo}</span>
                                    <span>{match.team2}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TournamentBracket;