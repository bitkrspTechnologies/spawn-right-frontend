
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { CalendarDays } from "lucide-react";
// import { getValidLogoUrl } from "@/utils/urlValidator";

// export const TournamentCard = ({ tournament }: { tournament: any }) => {
//   const router = useRouter();
//   const isLive = tournament.status === 'ongoing';

//   return (
//     <div 
//       className="group bg-white/5 rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm"
//       onClick={() => router.push(`/tournaments/${tournament._id}`)}
//     >
//       {/* Live Badge */}
//       {/* {isLive && (
//         <div className="absolute top-3 right-3 flex items-center bg-pink-600/30 px-3 py-1 rounded-full text-pink-300 text-xs font-medium">
//           <span className="w-2 h-2 bg-pink-300 rounded-full animate-pulse mr-2"></span>
//           LIVE NOW
//         </div>
//       )} */}

//       <div className="flex items-start justify-between mb-4">
//         <div className="w-3/4">
//           <h3 className="text-xl font-semibold text-white mb-2 truncate">
//             {tournament.name}
//           </h3>
//           <p className="text-pink-300 font-medium text-sm">
//             ₹{tournament.prize_pool?.toLocaleString('en-IN') || '0'} Prize Pool
//           </p>
//         </div>
//         <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
//           <Image 
//             src={getValidLogoUrl(tournament.logo) || "/images/default-tournament.svg"} 
//             alt="Tournament Logo"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       <div className="flex items-center text-gray-300 mt-4">
//         <CalendarDays className="w-4 h-4 mr-2 text-pink-300" />
//         <span className="text-sm">
//           {new Date(tournament.start_date).toLocaleDateString('en-IN', {
//             day: 'numeric',
//             month: 'short',
//           })} - {' '}
//           {new Date(tournament.end_date).toLocaleDateString('en-IN', {
//             day: 'numeric',
//             month: 'short',
//             year: 'numeric'
//           })}
//         </span>
//       </div>

//       {isLive && (
//         <button 
//           onClick={(e) => {
//             e.stopPropagation();
//             router.push(`/tournaments/${tournament._id}/live`);
//           }}
//           className="mt-4 w-full bg-pink-600/30 hover:bg-pink-600/40 text-pink-100 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
//         >
//           Go to Live Matches
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-4 w-4 ml-2 animate-pulse" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M15.536 8.464a5 5 0 010 7.072M12 18.364a7 7 0 010-12.728M8.464 15.536a5 5 0 010-7.072" 
//             />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };


"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { getValidLogoUrl } from "@/utils/urlValidator";

export const TournamentCard = ({ tournament }: { tournament: any }) => {
  const router = useRouter();
  const isLive = tournament.status === 'ongoing';

  const handleLiveMatchesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Navigate to the tournament's live matches page
    router.push(`/tournaments/${tournament._id}/live`);
  };

  const handleCardClick = () => {
    router.push(`/tournaments/${tournament._id}`);
  };

  return (
    <div 
      className="group bg-white/5 rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm"
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-3/4">
          <h3 className="text-xl font-semibold text-white mb-2 truncate">
            {tournament.name}
          </h3>
          <p className="text-pink-300 font-medium text-sm">
            ₹{tournament.prize_pool?.toLocaleString('en-IN') || '0'} Prize Pool
          </p>
        </div>
        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
          <Image 
            src={getValidLogoUrl(tournament.logo) || "/images/default-tournament.svg"} 
            alt="Tournament Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center text-gray-300 mt-4">
        <CalendarDays className="w-4 h-4 mr-2 text-pink-300" />
        <span className="text-sm">
          {new Date(tournament.start_date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
          })} - {' '}
          {new Date(tournament.end_date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </span>
      </div>

      {isLive && (
        <button 
          onClick={handleLiveMatchesClick}
          className="mt-4 w-full bg-pink-600/30 hover:bg-pink-600/40 text-pink-100 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
        >
          Go to Live Matches
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 animate-pulse" 
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