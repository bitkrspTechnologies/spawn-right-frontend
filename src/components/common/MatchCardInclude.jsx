import Image from "next/image";
import { getValidLogoUrl } from "@/utils/urlValidator";
import { useRouter } from "next/navigation";

export default function MatchCard({
  matchId,
  matchNumber,
  game,
  logo,
  teams,
  result,
}) {
  const router = useRouter();

  const handleLeaderboardClick = () => {
    router.push(`/leaderboard/${matchId}`);
  };

  return (
    <div className="text-lg w-full rounded-xl border border-white/70 p-4 text-white shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md backdrop-saturate-150">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>{matchNumber}</span>
          <span className="text-xl">●</span>
          <span>{game}</span>
        </div>
        <Image
          src={getValidLogoUrl(logo)}
          alt={`${game} Logo`}
          width={30}
          height={30}
        />
      </div>

      {/* Teams and Scores - Fixed height container */}
      <div className="space-y-4 min-h-[132px]">
        {" "}
        {/* Fixed min-height */}
        {teams.map((team, index) => (
          <div key={index} className="flex justify-between items-center h-8">
            {" "}
            {/* Fixed team row height */}
            <div className="flex items-center gap-2">
              <Image
                src={getValidLogoUrl(team.logo)}
                alt={`${team.name} Logo`}
                width={20}
                height={18}
              />
              <span className="font-bold text-sm">{team.name}</span>
            </div>
            <span className="font-semibold text-sm mr-10">{team.score}</span>
          </div>
        ))}
        {/* Fill remaining slots with invisible placeholders */}
        {teams.length < 3 &&
          Array.from({ length: 3 - teams.length }).map((_, index) => (
            <div key={`empty-${index}`} className="h-8 invisible">
              <span>Placeholder</span>
            </div>
          ))}
      </div>

      {/* Result and Divider */}
      <div className="mt-2">
        <div className="text-pink-400 text-sm">{result}</div>
        <div className="border-t border-white/70 mt-3 -mx-4" />
      </div>

      {/* Leaderboard Button */}
      <div className="text-right mt-1">
        <button
          onClick={handleLeaderboardClick}
          className="text-white text-sm hover:text-pink-400 transition-colors"
        >
          Leader Board
        </button>
      </div>
    </div>
  );
}
