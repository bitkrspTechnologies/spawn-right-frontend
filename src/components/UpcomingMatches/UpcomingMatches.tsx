'use client';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const upcomingMatches = [
    {
        team1: 'BAC',
        team2: 'SGP',
        logo1: '/images/cod.svg',
        logo2: '/images/bgmi.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
    {
        team1: 'BSE',
        team2: 'AGG',
        logo1: '/images/cod.svg',
        logo2: '/images/bgmi.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
    {
        team1: 'BAC',
        team2: 'SGP',
        logo1: '/images/cod.svg',
        logo2: '/images/bgmi.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
    {
        team1: 'BAC',
        team2: 'SGP',
        logo1: '/images/cod.svg',
        logo2: '/images/bgmi.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
];

const upcomingTournaments = [
    {
        name: 'Savage Impact Championship 2024 female Finals',
        logo: '/images/bgmi.svg',
        gameLogo: '/images/bgmi.svg',
        date: 'APR 15–17',
    },
    {
        name: 'Orion Tournament',
        logo: '/images/cod.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
    {
        name: 'Duel for the Dollars',
        logo: '/images/cod.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
    {
        name: 'Savage Impact Championship 2024 female Finals',
        logo: '/images/cod.svg',
        gameLogo: '/images/cod.svg',
        date: 'APR 15–17',
    },
];

const UpcomingEventsSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tailwind's sm breakpoint

    return (
        <div className="font-bold flex flex-col lg:flex-row gap-8 justify-center items-start py-5 px-4">

            {/* Left Section - Matches */}
            <div className="flex flex-col flex-1 w-full">
                <div className="text-white mb-6 text-center">
                    <h2 className="text-2xl font-normal">Upcoming Matches</h2>
                    <p className="font-[roboto_serif] text-md font-semibold text-white/80">"Who's Playing Next? See the Lineup — It’s Game Time!"</p>
                </div>
                <div className="bg-[var(--card-bg-uc)] text-white rounded-2xl p-5 shadow-lg w-full">
                    {upcomingMatches.map((match, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-2 mb-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="font-[roboto_serif] flex items-center gap-2">
                                    <Image src={match.logo1} alt="team1" width={24} height={24} />
                                    <span className='font-[roboto_serif] font-bold'>{match.team1}</span>
                                    <span className="text-white font-[roboto_serif] font-bold mx-1">vs</span>
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
                            <p className="text-xs text-white font-[roboto_serif] font-semibold mt-1">
                                Arena of Valor International Championship 2024
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="hidden lg:flex items-center justify-center h-full">
                <div className="w-0.5 h-100  bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full" /> {/* Set a fixed height */}
            </div>

            {/* Right Section - Tournaments */}
            <div className="flex flex-col flex-1 w-full">
                <div className="text-white mb-6 text-center">
                    <h2 className="text-2xl font-normal">Upcoming Tournaments</h2>
                    <p className="font-[roboto_serif] text-md font-semibold text-white/80">"Ready to Compete or Just Watch the Best?"</p>
                </div>
                <div className="bg-[var(--card-bg-uc)] text-white rounded-2xl p-5 shadow-lg w-full">
                    {upcomingTournaments.map((tournament, index) => (
                        <div key={index} className="font-[roboto_serif] bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4">
                            <div className="flex flex-col sm:flex-row justify-between gap-2">
                                <div className="flex items-center text-md gap-2">
                                    <Image src={tournament.logo} alt="Tournament" width={28} height={28} />
                                    <span className="font-medium text-md">{tournament.name}</span>
                                </div>
                                <div className="flex items-center gap-3 min-w-29">
                                    <Image src={tournament.gameLogo} alt="Game" width={28} height={28} />
                                    <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
                                        {tournament.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="font-bold flex flex-col lg:flex-row gap-8 justify-center items-start py-5 px-4">

    //         {/* Left Section - Matches */}
    //         <div className="flex flex-col flex-1 w-full">
    //             <div className="text-white mb-6 text-center">
    //                 <h2 className="text-2xl font-normal">Upcoming Matches</h2>
    //                 <p className="font-[roboto_serif] text-md font-semibold text-white/80">"Who's Playing Next? See the Lineup — It’s Game Time!"</p>
    //             </div>
    //             <div className="bg-[var(--card-bg-uc)] text-white rounded-2xl p-5 shadow-lg w-full">
    //                 {upcomingMatches.map((match, index) => (
    //                     <div key={index} className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-2 mb-4">
    //                         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    //                             <div className="font-[roboto_serif] flex items-center gap-2">
    //                                 <Image src={match.logo1} alt="team1" width={24} height={24} />
    //                                 <span className='font-[roboto_serif] font-bold'>{match.team1}</span>
    //                                 <span className="text-white font-[roboto_serif] font-bold mx-1">vs</span>
    //                                 <Image src={match.logo2} alt="team2" width={24} height={24} />
    //                                 <span>{match.team2}</span>
    //                             </div>
    //                             <div className="flex items-center gap-3">
    //                                 <Image src={match.gameLogo} alt="Game" width={28} height={28} />
    //                                 <span className="bg-white text-black text-xs px-3 py-1 rounded-sm font-semibold">
    //                                     {match.date}
    //                                 </span>
    //                             </div>
    //                         </div>
    //                         <p className="text-xs text-white font-[roboto_serif] font-semibold mt-1">
    //                             Arena of Valor International Championship 2024
    //                         </p>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>

    //         {/* Divider */}
    //         <div className="hidden lg:flex items-center justify-center h-full"> {/* Ensure parent has height */}
    //             <div className="w-0.5 h-100 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full" /> {/* Set a fixed height */}
    //         </div>

    //         {/* Right Section - Tournaments */}
    //         <div className="flex flex-col flex-1 w-full">
    //             <div className="text-white mb-6 text-center">
    //                 <h2 className="text-2xl font-normal">Upcoming Tournaments</h2>
    //                 <p className="font-[roboto_serif] text-md font-semibold text-white/80">"Ready to Compete or Just Watch the Best?"</p>
    //             </div>
    //             <div className="bg-[var(--card-bg-uc)] text-white rounded-2xl p-5 shadow-lg w-full">
    //                 {upcomingTournaments.map((tournament, index) => (
    //                     <div key={index} className="bg-white/10 backdrop-blur-md border border-[var(--border-card)] rounded-sm p-3 mb-4">
    //                         <div className="flex flex-col sm:flex-row justify-between gap-2">
    //                             <div className="flex items-center text-md gap -2">
    //                                 <Image src={tournament.logo} alt="Tournament" width={28} height={28} />
    //                                 <span className="font-medium text-md">{tournament.name}</span>
    //                             </div>
    //                             <div className="flex items-center gap-3 min-w-29">
    //                                 <Image src={tournament.gameLogo} alt="Game" width={28} height={28} />
    //                                 <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-semibold">
    //                                     {tournament.date}
    //                                 </span>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );


};

export default UpcomingEventsSection;
