import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import MatchCard from '@/components/common/MatchCardInclude';
import { fetchAll } from '@/services/LiveMatches';
import { useRouter } from 'next/navigation';
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive';

export default function LiveMatches({ variant = "grid" }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['live-matches'],
    queryFn: () => fetchAll('ongoing'),
  });

  const processMatches = (data) => {
    if (!data?.data) return [];

    return data.data.map((match) => ({
      id: match._id,
      matchNumber: match.matchNumber,
      stage: match.stage,
      status: match.status,
      tournament: match.tournament,
      teams: (match.teams || [])
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .slice(0, 3)
        .map((team) => ({
          name: team.team?.name || 'Unknown Team',
          score: team.totalPoints || 0,
          logo: team.team?.logo
        })),
      game: getGameName(match.tournament?.name),
      logo: match.tournament?.logo || '/images/bgmi.svg',
    }));
  };

  const getGameName = (tournamentName) => {
    const normalized = (tournamentName || '').toLowerCase();
    if (normalized.includes('bgmi')) return 'BGMI';
    if (normalized.includes('cod')) return 'COD';
    if (normalized.includes('indus')) return 'INDUS';
    return 'BGMI';
  };

  const renderMatchCard = (match, index) => (
    <MatchCard
      key={index}
      matchId={match.id}
      matchNumber={`Match ${match.matchNumber}${match.stage ? ` - ${match.stage}` : ''}`}
      game={match.game}
      logo={match.logo}
      teams={match.teams}
      result={match.status === 'ongoing' ? 'Live Now' : 'Upcoming'}
    />
  );

  // Skeleton Loading Component
  const SkeletonMatchCard = () => (
    <div className="bg-gray-800 rounded-lg p-4 animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        <div className="h-6 bg-gray-700 rounded-full w-6"></div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-700 rounded w-16"></div>
        </div>
        <div className="h-4 bg-gray-700 rounded w-8"></div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-700 rounded w-16"></div>
        </div>
        <div className="h-4 bg-gray-700 rounded w-8"></div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-full"></div>
    </div>
  );

  if (error) return (
    <section className="w-full px-3 py-4">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-5 h-5 bg-red-500 rounded-full animate-blink"></span>
        <h2 className="text-3xl font-bold text-white">Live Matches</h2>
      </div>
      <div className="text-center p-8 text-red-500">Error loading matches</div>
    </section>
  );

  const matches = processMatches(data);

  return (
    <section className={`w-full ${variant === "carousel" ? "px-0 py-0" : "px-3 py-4"}`}>
      {/* Header */}
      <div className={`flex items-center gap-2 sm:gap-3 ${variant === "carousel" ? "mb-2 px-2 sm:px-3" : "mb-4 sm:mb-6"}`}>
        <span className="w-5 h-5 bg-red-500 rounded-full animate-blink"></span>
        <h2 className="text-base sm:text-2xl font-bold text-white">Live Matches</h2>
      </div>

      {isLoading ? (
        variant === "grid" ? (
          <div className="flex gap-3 sm:gap-6 overflow-x-auto px-2 sm:px-4 scrollbar-hide">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[90%] sm:w-[320px] max-w-xs">
                <SkeletonMatchCard />
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
            className="!pb-6 sm:!pb-8"
          >
            {[...Array(3)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center px-2 sm:px-4">
                  <div className="w-full max-w-md">
                    <SkeletonMatchCard />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : matches.length > 0 ? (
        variant === "grid" ? (
          <div className="flex gap-3 sm:gap-6 overflow-x-auto px-2 sm:px-4 scrollbar-hide">
            {matches.map((match, index) => (
              <div key={index} className="flex-shrink-0 w-[90%] sm:w-[320px] max-w-xs">
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
            loop={matches.length > 1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
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
        )
      ) : (
        <div className="text-center p-8 text-gray-400">No live matches currently</div>
      )}
    </section>
  );
}