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
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>{matchNumber}</span>
          <span className="text-xl">●</span>
          <span>{game}</span>
        </div>
        <Image
          src={getValidLogoUrl(logo)}
          alt={`${game} Logo`}
          width={30}
          height={30}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Teams and Scores - Fixed height container */}
      <div className="space-y-4 min-h-[132px]">
        {teams.map((team, index) => (
          <div key={index} className="flex justify-between items-center h-8">
            <div className="flex items-center gap-2">
              <Image
                src={getValidLogoUrl(team.logo)}
                alt={`${team.name} Logo`}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="font-bold text-sm line-clamp-1 max-w-[120px]">{team.name}</span>
            </div>
            <span className="font-semibold text-sm">{team.score}</span>
          </div>
        ))}
        {/* Fill remaining slots with empty divs to maintain consistent height */}
        {Array.from({ length: Math.max(0, 3 - teams.length) }).map((_, index) => (
          <div key={`empty-${index}`} className="h-8" aria-hidden="true"></div>
        ))}
      </div>

      {/* Result and Divider */}
      <div className="mt-4">
        <div className="text-pink-400 text-sm">{result}</div>
        <div className="border-t border-white/70 mt-3 -mx-4" />
      </div>

      {/* Leaderboard Button */}
      <div className="text-right mt-2">
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