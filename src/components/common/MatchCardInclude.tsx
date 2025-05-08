'use client';

// import Image from 'next/image';

// export default function MatchCard() {
//   const matchData = {
//     matchNumber: '7th Match',
//     game: 'COD',
//     logo: '/images/cod.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/cod.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/cod.svg',
//     },
//     result: 'BAC won by 47 points',
//   };

//   return (
//     <div className="font-[roboto] max-w-sm w-full rounded-xl border border-white/70 p-4 text-white shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md backdrop-saturate-150">

//       <div>
       

//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-4 text-sm text-gray-300">
//             <span>{matchData.matchNumber}</span>
//             <span className="text-xl">●</span>
//             <span>{matchData.game}</span>
//           </div>
//           <Image
//             src={matchData.logo}
//             alt={`${matchData.game} Logo`}
//             width={30}
//             height={30}
//           />
//         </div>

//         {/* Teams and Scores */}
//         <div className="space-y-4">
//           {[matchData.team1, matchData.team2].map((team, index) => (
//             <div key={index} className="flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <Image src={team.logo} alt={`${team.name} Logo`} width={20} height={18} />
//                 <span className="font-bold text-sm">{team.name}</span>
//               </div>
//               <span className="font-semibold text-sm mr-20">{team.score}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔷 Section 2: Result & Divider */}
//       <div className="mt-4">
//         <div className="text-pink-400 text-sm">{matchData.result}</div>
//         <div className="border-t border-white/70 mt-3 -mx-4" />
//       </div>

//       {/* 🔷 Section 3: Leaderboard */}
//       <div className="text-right mt-3">
//         <button className="text-white text-sm hover:none">Leader Board</button>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';

interface Team {
  name: string;
  score: number;
  logo: string;
}

interface MatchCardProps {
  matchNumber: string;
  game: string;
  logo: string;
  team1: Team;
  team2: Team;
  result: string;
}

export default function MatchCard({
  matchNumber,
  game,
  logo,
  team1,
  team2,
  result,
}: MatchCardProps) {
  return (
    <div className="font-[roboto] w-full rounded-xl border border-white/70 p-4 text-white shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md backdrop-saturate-150">

      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>{matchNumber}</span>
            <span className="text-xl">●</span>
            <span>{game}</span>
          </div>
          <Image
            src={logo}
            alt={`${game} Logo`}
            width={30}
            height={30}
          />
        </div>

        {/* Teams and Scores */}
        <div className="space-y-4">
          {[team1, team2].map((team, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src={team.logo} alt={`${team.name} Logo`} width={20} height={18} />
                <span className="font-bold text-sm">{team.name}</span>
              </div>
              <span className="font-semibold text-sm mr-20">{team.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Result and Divider */}
      <div className="mt-4">
        <div className="text-pink-400 text-sm">{result}</div>
        <div className="border-t border-white/70 mt-3 -mx-4" />
      </div>

      {/* Leaderboard Button */}
      <div className="text-right mt-3">
        <button className="text-white text-sm hover:none">Leader Board</button>
      </div>
    </div>
  );
}
