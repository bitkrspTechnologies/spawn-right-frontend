"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { getValidLogoUrl } from "@/utils/urlValidator";

export const TournamentCard = ({ tournament, gameKey }: { tournament: any, gameKey: string }) => {
  const router = useRouter();
  
  // Enhanced isLive check that works for all game types
  const isLive = gameKey === "bgmi" 
    ? tournament.status === 'ongoing'
    : tournament.lifecycle === 'live' || tournament.lifecycle === 'ongoing';

  const handleLiveMatchesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/matches/tournaments/${tournament._id}/matches?game=${gameKey}`);
  };

  const handleCardClick = () => {
    if (gameKey === "valorant" || gameKey === "csgo") {
      const matchIds = tournament.matches?.map((match: any) => match.id).join(',') || '';
      const tournamentId = tournament.tournament?.id || tournament._id;
      
      router.push(
        `/matches/tournaments/${tournamentId}/matches?game=${gameKey}&matchIds=${matchIds}`
      );
    } else if (gameKey === "bgmi") {
      // For BGMI, use the existing structure
      router.push(`/matches/tournaments/${tournament._id}/matches?game=${gameKey}`);
    } else {
      // Default case for other games
      router.push(`/matches/tournaments/${tournament._id || tournament.id}/matches?game=${gameKey}`);
    }
  };

  // Extract tournament details based on game type
  const tournamentName = gameKey === "bgmi" 
    ? tournament.name 
    : tournament.title || tournament.name;
    
  const prizePool = gameKey === "bgmi"
    ? `₹${tournament.prize_pool?.toLocaleString('en-IN') || '0'} Prize Pool`
    : tournament.prize_pool 
      ? `$${tournament.prize_pool.toLocaleString('en-US')} Prize Pool`
      : '';

  const startDate = gameKey === "bgmi"
    ? new Date(tournament.start_date)
    : tournament.start ? new Date(tournament.start) : null;
    
  const endDate = gameKey === "bgmi"
    ? new Date(tournament.end_date)
    : tournament.end ? new Date(tournament.end) : null;

  const logoUrl = gameKey === "bgmi"
    ? getValidLogoUrl(tournament.logo)
    : tournament.logo || tournament.image_url;

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white/5 rounded-xl p-4 sm:p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-[70%] pr-2">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 line-clamp-2">
            {tournamentName}
          </h3>
          {prizePool && (
            <p className="text-pink-300 font-medium text-xs sm:text-sm">
              {prizePool}
            </p>
          )}
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 p-1 sm:p-2 flex items-center justify-center flex-shrink-0">
          <Image
            src={logoUrl || "/images/default-tournament.svg"}
            alt="Tournament Logo"
            width={40}
            height={40}
            className="object-cover w-6 h-6 sm:w-8 sm:h-8"
          />
        </div>
      </div>

      {(startDate && endDate) && (
        <div className="flex items-center text-gray-300 mt-3 sm:mt-4">
          <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-pink-300" />
          <span className="text-xs sm:text-sm">
            {startDate.toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
            })} - {' '}
            {endDate.toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: startDate.getFullYear() !== endDate.getFullYear() ? 'numeric' : undefined
            })}
          </span>
        </div>
      )}

      {isLive && (
        <button
          onClick={handleLiveMatchesClick}
          className="mt-3 sm:mt-4 w-full bg-pink-600/30 hover:bg-pink-600/40 text-pink-100 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-center"
        >
          Go to Live Matches
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 animate-pulse" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15.536 8.464a5 5 0 010 7.072M12 18.364a7 7 0 010-12.728M8.464 15.536a5 5 0 010-7.072" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};