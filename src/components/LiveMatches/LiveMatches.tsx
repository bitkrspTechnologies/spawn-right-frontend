// import MatchCard from "@/components/common/MatchCardInclude";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const matchesData = [
//   {
//     matchNumber: "7th Match",
//     game: "COD",
//     logo: "/images/cod.svg",
//     team1: {
//       name: "BAC",
//       score: 356,
//       logo: "/images/cod.svg",
//     },
//     team2: {
//       name: "SGP",
//       score: 309,
//       logo: "/images/cod.svg",
//     },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "8th Match",
//     game: "BGMI",
//     logo: "/images/bgmi.svg",
//     team1: {
//       name: "BAC",
//       score: 356,
//       logo: "/images/bgmi.svg",
//     },
//     team2: {
//       name: "SGP",
//       score: 309,
//       logo: "/images/bgmi.svg",
//     },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "9th Match",
//     game: "COD",
//     logo: "/images/cod.svg",
//     team1: {
//       name: "BAC",
//       score: 356,
//       logo: "/images/cod.svg",
//     },
//     team2: {
//       name: "SGP",
//       score: 309,
//       logo: "/images/cod.svg",
//     },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "10th Match",
//     game: "INDUS",
//     logo: "/images/indus.svg",
//     team1: {
//       name: "BAC",
//       score: 356,
//       logo: "/images/indus.svg",
//     },
//     team2: {
//       name: "SGP",
//       score: 309,
//       logo: "/images/indus.svg",
//     },
//     result: "BAC won by 47 points",
//   },
//   // add more matches as needed
// ];

// export default function LiveMatches({
//   variant = "grid",
// }: {
//   variant?: "grid" | "carousel";
// }) {
//   const renderMatchCard = (match: (typeof matchesData)[0], index: number) => (
//     <MatchCard
//       key={index}
//       matchNumber={match.matchNumber}
//       game={match.game}
//       logo={match.logo}
//       team1={match.team1}
//       team2={match.team2}
//       result={match.result}
//     />
//   );

//   return (
//     <section
//       className={`w-full ${variant === "carousel" ? "px-0 py-0" : "px-3 py-4"}`}
//     >
//       <div
//         className={`flex items-center gap-3 ${
//           variant === "carousel" ? "mb-2 px-3" : "mb-6"
//         }`}
//       >
//         <span className="w-5 h-5 bg-red-500 rounded-full"></span>
//         <h2
//           className={`${
//             variant === "carousel" ? "text-lg" : "text-3xl"
//           } font-bold text-white`}
//         >
//           Live Matches
//         </h2>
//       </div>

//       {variant === "grid" ? (
//         <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide ">
//           {matchesData.map((match, index) => (
//             <div key={index} className="flex-shrink-0 w-[320px]">
//               {" "}
//               {/* Fixed width to show 3 cards approx */}
//               {renderMatchCard(match, index)}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           centeredSlides
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           className="!pb-8"
//         >
//           {matchesData.map((match, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center px-4">
//                 <div className="max-w-md w-full">
//                   {renderMatchCard(match, index)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// }

// import MatchCard from "@/components/common/MatchCardInclude";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const matchesData = [
//   {
//     matchNumber: "7th Match",
//     game: "COD",
//     logo: "/images/cod.svg",
//     team1: { name: "BAC", score: 356, logo: "/images/cod.svg" },
//     team2: { name: "SGP", score: 309, logo: "/images/cod.svg" },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "8th Match",
//     game: "BGMI",
//     logo: "/images/bgmi.svg",
//     team1: { name: "BAC", score: 356, logo: "/images/bgmi.svg" },
//     team2: { name: "SGP", score: 309, logo: "/images/bgmi.svg" },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "9th Match",
//     game: "COD",
//     logo: "/images/cod.svg",
//     team1: { name: "BAC", score: 356, logo: "/images/cod.svg" },
//     team2: { name: "SGP", score: 309, logo: "/images/cod.svg" },
//     result: "BAC won by 47 points",
//   },
//   {
//     matchNumber: "10th Match",
//     game: "INDUS",
//     logo: "/images/indus.svg",
//     team1: { name: "BAC", score: 356, logo: "/images/indus.svg" },
//     team2: { name: "SGP", score: 309, logo: "/images/indus.svg" },
//     result: "BAC won by 47 points",
//   },
// ];

// export default function LiveMatches({
//   variant = "grid",
// }: {
//   variant?: "grid" | "carousel";
// }) {
//   const renderMatchCard = (match: (typeof matchesData)[0], index: number) => (
//     <MatchCard
//       key={index}
//       matchNumber={match.matchNumber}
//       game={match.game}
//       logo={match.logo}
//       team1={match.team1}
//       team2={match.team2}
//       result={match.result}
//     />
//   );

//   return (
    // <section
    //   className={`w-full ${
    //     variant === "carousel" ? "px-0 py-0" : "px-3 py-4"
    //   }`}
    // >
    //   {/* Header */}
    //   <div
    //     className={`flex items-center gap-2 sm:gap-3 ${
    //       variant === "carousel" ? "mb-2 px-2 sm:px-3" : "mb-4 sm:mb-6"
    //     }`}
    //   >
    //     <span className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full"></span>
    //     <h2
    //       className={`text-base sm:text-2xl font-bold text-white`}
    //     >
    //       Live Matches
    //     </h2>
    //   </div>

    //   {/* Grid View */}
    //   {variant === "grid" ? (
    //     <div className="flex gap-3 sm:gap-6 overflow-x-auto px-2 sm:px-4 scrollbar-hide">
    //       {matchesData.map((match, index) => (
    //         <div
    //           key={index}
    //           className="flex-shrink-0 w-[90%] sm:w-[320px] max-w-xs"
    //         >
    //           {renderMatchCard(match, index)}
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     // Carousel View
    //     <Swiper
    //       modules={[Pagination, Autoplay]}
    //       spaceBetween={20}
    //       slidesPerView={1}
    //       centeredSlides
    //       loop={true}
    //       autoplay={{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       }}
    //       pagination={{ clickable: true }}
    //       className="!pb-6 sm:!pb-8"
    //     >
    //       {matchesData.map((match, index) => (
    //         <SwiperSlide key={index}>
    //           <div className="flex justify-center px-2 sm:px-4">
    //             <div className="w-full max-w-md">
    //               {renderMatchCard(match, index)}
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   )}
    // </section>
//   );
// }



import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import MatchCard from '@/components/common/MatchCardInclude';
import { fetchAll } from '@/services/LiveMatches';
import { Match } from '@/lib/type';
import "swiper/css";
import "swiper/css/pagination";


export default function LiveMatches({ 
  variant = "grid" 
}: { 
  variant?: "grid" | "carousel" 
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['live-matches'],
    queryFn: () => fetchAll('ongoing'),
  });

// Update the processMatches function in LiveMatches.tsx
const processMatches = (data: any): Match[] => {
  if (!data?.data) return [];
  
  return data.data.map((match: any) => ({
    ...match,
    teams: (match.teams || [])
      .sort((a: any, b: any) => b.totalPoints - a.totalPoints)
      .slice(0, 3)
      .map((team: any) => ({
        name: team.team?.name || 'Unknown Team',
        score: team.totalPoints || 0,
        logo: team.team?.logo 
      })),
    // Update the game name usage in processMatches
game: getGameName(match.tournament?.name),

    logo: match.tournament?.logo || '/images/bgmi.svg',
  }));
};

const getGameName = (tournamentName?: string | null): string => {
  const normalized = (tournamentName || '').toLowerCase();
  
  if (normalized.includes('bgmi')) return 'BGMI';
  if (normalized.includes('cod')) return 'COD';
  if (normalized.includes('indus')) return 'INDUS';
  return 'BGMI'; // Default value
};


  const renderMatchCard = (match: Match, index: number) => (
    <MatchCard
      key={index}
      matchNumber={`Match ${match.matchNumber}${match.stage ? ` - ${match.stage}` : ''}`}
      game={match.game}
      logo={match.logo}
      teams={match.teams}
      result={match.status === 'ongoing' ? 'Live Now' : 'Upcoming'}
    />
  );

  if (isLoading) return <div className="text-center p-8 text-white">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error loading matches</div>;

  const matches = processMatches(data);

  return (
    // <section className={`w-full ${variant === "carousel" ? "px-0 py-0" : "px-3 py-4"}`}>
    //   <div className={`flex items-center gap-3 ${variant === "carousel" ? "mb-2 px-3" : "mb-6"}`}>
    //     <span className="w-5 h-5 bg-red-500 rounded-full"></span>
    //     <h2 className={`${variant === "carousel" ? "text-lg" : "text-3xl"} font-bold text-white`}>
    //       Live Matches
    //     </h2>
    //   </div>

    //   {variant === "grid" ? (
    //     <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide">
    //       {matches.map((match, index) => (
    //         <div key={index} className="flex-shrink-0 w-[320px]">
    //           {renderMatchCard(match, index)}
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <Swiper
    //       modules={[Pagination, Autoplay]}
    //       spaceBetween={20}
    //       slidesPerView={1}
    //       centeredSlides
    //       loop={true}
    //       autoplay={{ delay: 3000, disableOnInteraction: false }}
    //       pagination={{ clickable: true }}
    //       className="!pb-8"
    //     >
    //       {matches.map((match, index) => (
    //         <SwiperSlide key={index}>
    //           <div className="flex justify-center px-4">
    //             <div className="max-w-md w-full">
    //               {renderMatchCard(match, index)}
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   )}
    // </section>

       <section
      className={`w-full ${
        variant === "carousel" ? "px-0 py-0" : "px-3 py-4"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-2 sm:gap-3 ${
          variant === "carousel" ? "mb-2 px-2 sm:px-3" : "mb-4 sm:mb-6"
        }`}
      >
        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full"></span>
        <h2
          className={`text-base sm:text-2xl font-bold text-white`}
        >
          Live Matches
        </h2>
      </div>

      {/* Grid View */}
      {variant === "grid" ? (
        <div className="flex gap-3 sm:gap-6 overflow-x-auto px-2 sm:px-4 scrollbar-hide">
          {matches.map((match, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[320px] max-w-xs"
            >
              {renderMatchCard(match, index)}
            </div>
          ))}
        </div>
      ) : (
        // Carousel View
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true}}
          className="!pb-6 sm:!pb-8"
        >
          {matches.map((match, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center px-2 sm:px-4">
                <div className="w-full max-w-md">
                  {renderMatchCard(match, index)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}