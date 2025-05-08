// import MatchCard from '@/components/common/MatchCardInclude';

// const matchesData = [
//   {
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
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'BGMI',
//     logo: '/images/bgmi.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/bgmi.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/bgmi.svg',
//     },
//     result: 'BAC won by 47 points',
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'INDUS',
//     logo: '/images/indus.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/indus.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/indus.svg',
//     },
//     result: 'BAC won by 47 points',
//   }
// ];

// export default function LiveMatches() {
//   return (
//     <section className="px-6 py-8 w-full" >
//       <div className="flex items-center gap-3 mb-6">
//         <span className="w-5 h-5 bg-red-500 rounded-full"></span>
//         <h2 className="text-3xl font-bold text-white">Live Matches</h2>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {matchesData.map((match, index) => (
//           <MatchCard
//             key={index}
//             matchNumber={match.matchNumber}
//             game={match.game}
//             logo={match.logo}
//             team1={match.team1}
//             team2={match.team2}
//             result={match.result}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import MatchCard from '@/components/common/MatchCardInclude';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const matchesData = [
//   {
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
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'BGMI',
//     logo: '/images/bgmi.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/bgmi.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/bgmi.svg',
//     },
//     result: 'BAC won by 47 points',
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'INDUS',
//     logo: '/images/indus.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/indus.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/indus.svg',
//     },
//     result: 'BAC won by 47 points',
//   }
// ];


// export default function LiveMatches({ variant = 'grid' }: { variant?: 'grid' | 'carousel' }) {
//   const renderMatchCard = (match: typeof matchesData[0], index: number) => (
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
//     <section className="px-6 py-8 w-full">
//       <div className="flex items-center gap-3 mb-6">
//         <span className="w-5 h-5 bg-red-500 rounded-full"></span>
//         <h2 className="text-3xl font-bold text-white">Live Matches</h2>
//       </div>

//       {variant === 'grid' ? (
//         <div className="grid md:grid-cols-3 gap-6">
//           {matchesData.map(renderMatchCard)}
//         </div>
//       ) : (
//         <Swiper
//           modules={[Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           centeredSlides
//           pagination={{ clickable: true }}
//           className="!pb-10" // gives space below for pagination
//         >
//           {matchesData.map((match, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center">
//                 {renderMatchCard(match, index)}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// }

//================================

// import MatchCard from '@/components/common/MatchCardInclude';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const matchesData = [
//   {
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
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'BGMI',
//     logo: '/images/bgmi.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/bgmi.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/bgmi.svg',
//     },
//     result: 'BAC won by 47 points',
//   },
//   {
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
//   },
//   {
//     matchNumber: '7th Match',
//     game: 'INDUS',
//     logo: '/images/indus.svg',
//     team1: {
//       name: 'BAC',
//       score: 356,
//       logo: '/images/indus.svg',
//     },
//     team2: {
//       name: 'SGP',
//       score: 309,
//       logo: '/images/indus.svg',
//     },
//     result: 'BAC won by 47 points',
//   }
// ];

// export default function LiveMatches({ variant = 'grid' }: { variant?: 'grid' | 'carousel' }) {
//   const renderMatchCard = (match: typeof matchesData[0], index: number) => (
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
//     <section className="px-4 py-6 w-full">
//       <div className="flex items-center gap-3 mb-6">
//         <span className="w-5 h-5 bg-red-500 rounded-full"></span>
//         <h2 className="text-3xl font-bold text-white">Live Matches</h2>
//       </div>

//       {variant === 'grid' ? (
//         <div className="grid md:grid-cols-3 gap-6">
//           {matchesData.map(renderMatchCard)}
//         </div>
//       ) : (
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           centeredSlides
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           className="!pb-10"
//         >
//           {matchesData.map((match, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center">
//                 {renderMatchCard(match, index)}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// }

// export default function LiveMatches({ variant = 'grid' }: { variant?: 'grid' | 'carousel' }) {
//   const renderMatchCard = (match: typeof matchesData[0], index: number) => (
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
//     <section className={`w-full ${variant === 'carousel' ? 'px-0 py-0' : 'px-3 py-4'}`}>
//       <div className={`flex items-center gap-3 ${variant === 'carousel' ? 'mb-2 px-3' : 'mb-6'}`}>
//         <span className="w-5 h-5 bg-red-500 rounded-full"></span>
//         <h2 className={`${variant === 'carousel' ? 'text-lg' : 'text-3xl'}  font-bold text-white`}>Live Matches</h2>
//       </div>

//       {variant === 'grid' ? (
//         <div className="grid md:grid-cols-3 gap-6 px-4 ">
//           {matchesData.map(renderMatchCard)}
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
// ===========================

import MatchCard from '@/components/common/MatchCardInclude';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const matchesData = [
  {
    matchNumber: '7th Match',
    game: 'COD',
    logo: '/images/cod.svg',
    team1: {
      name: 'BAC',
      score: 356,
      logo: '/images/cod.svg',
    },
    team2: {
      name: 'SGP',
      score: 309,
      logo: '/images/cod.svg',
    },
    result: 'BAC won by 47 points',
  },
  {
    matchNumber: '8th Match',
    game: 'BGMI',
    logo: '/images/bgmi.svg',
    team1: {
      name: 'BAC',
      score: 356,
      logo: '/images/bgmi.svg',
    },
    team2: {
      name: 'SGP',
      score: 309,
      logo: '/images/bgmi.svg',
    },
    result: 'BAC won by 47 points',
  },
  {
    matchNumber: '9th Match',
    game: 'COD',
    logo: '/images/cod.svg',
    team1: {
      name: 'BAC',
      score: 356,
      logo: '/images/cod.svg',
    },
    team2: {
      name: 'SGP',
      score: 309,
      logo: '/images/cod.svg',
    },
    result: 'BAC won by 47 points',
  },
  {
    matchNumber: '10th Match',
    game: 'INDUS',
    logo: '/images/indus.svg',
    team1: {
      name: 'BAC',
      score: 356,
      logo: '/images/indus.svg',
    },
    team2: {
      name: 'SGP',
      score: 309,
      logo: '/images/indus.svg',
    },
    result: 'BAC won by 47 points',
  },
  // add more matches as needed
];

export default function LiveMatches({ variant = 'grid' }: { variant?: 'grid' | 'carousel' }) {
  const renderMatchCard = (match: typeof matchesData[0], index: number) => (
    <MatchCard
      key={index}
      matchNumber={match.matchNumber}
      game={match.game}
      logo={match.logo}
      team1={match.team1}
      team2={match.team2}
      result={match.result}
    />
  );

  return (
    <section className={`w-full ${variant === 'carousel' ? 'px-0 py-0' : 'px-3 py-4'}`}>
      <div className={`flex items-center gap-3 ${variant === 'carousel' ? 'mb-2 px-3' : 'mb-6'}`}>
        <span className="w-5 h-5 bg-red-500 rounded-full"></span>
        <h2 className={`${variant === 'carousel' ? 'text-lg' : 'text-3xl'} font-bold text-white`}>Live Matches</h2>
      </div>

      {variant === 'grid' ? (
        <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide ">
          {matchesData.map((match, index) => (
            <div key={index} className="flex-shrink-0 w-[320px]"> {/* Fixed width to show 3 cards approx */}
              {renderMatchCard(match, index)}
            </div>
          ))}
        </div>
      ) : (
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
          pagination={{ clickable: true }}
          className="!pb-8"
        >
          {matchesData.map((match, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center px-4">
                <div className="max-w-md w-full">
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
