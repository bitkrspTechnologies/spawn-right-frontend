// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   XMarkIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from "@heroicons/react/24/outline";
// import classNames from "classnames";
// import Button from "@/components/Button/Button";

// interface GameOnSidebarProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const GameOnSidebar: React.FC<GameOnSidebarProps> = ({ visible, onClose }) => {
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

//   const toggleDropdown = (index: number) => {
//     setDropdownOpen((prev) => (prev === index ? null : index));
//   };

//   const navLinks = [
//     {
//       title: "Live Matches",
//       href: "/tournaments",
//       subLinks: ["BGMI", "Valorant", "CSGO"],
//     },
//     {
//       title: "TOURNAMENT TRACKER",
//       href: "/leaderboard",
//       subLinks: ["BGMI", "Valorent", "CSGO"],
//     },
//     {
//       title: "LEADERBOARD",
//       href: "/leaderboard",
//       subLinks: ["BGMI", "Valorent", "CSGO"],
//     },
//   ];

//   const gridIcon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-5 h-5 text-white"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="14" width="7" height="7" rx="1" />
//       <rect x="3" y="14" width="7" height="7" rx="1" />
//     </svg>
//   );

//   return (
//     <>
//       <div
//         className={classNames(
//           "fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300",
//           {
//             hidden: !visible,
//           }
//         )}
//         onClick={onClose}
//       ></div>

//       <div
//         className={classNames(
//           "fixed top-0 right-0 h-(500px) w-72 max-w-full mt-14",
//           "bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]",
//           "z-70 shadow-2xl rounded-l-3xl p-6",
//           "transition-transform duration-300 ease-in-out flex flex-col",
//           {
//             "translate-x-0": visible,
//             "translate-x-full": !visible,
//           }
//         )}
//       >
//         <div className="flex justify-between gap-1 items-center mx-5 mt-5">
//           <h2 className="text-pink-500 font-bold text-xl">GAME ON !!!!!!</h2>
//           <button onClick={onClose}>
//             <XMarkIcon className="h-6 w-6 text-white" />
//           </button>
//         </div>

//         <div className="flex flex-col h-80 mt-5 gap-4">
//           {navLinks.map((link, index) => (
//             <div key={index}>
//               {/* Button with pink/black gradient */}
//               <button
//                 className="w-full rounded-xl py-3 px-4 text-white flex justify-between items-center
//           bg-gradient-to-r from-[#1a1a1a] via-[#2c1a33] to-[#3c1a4a]
//           hover:from-[#2c1a33] hover:via-[#3c1a4a] hover:to-[#4c1a5a]
//           transition-all duration-300
//           border border-[#3c1a4a] shadow-lg"
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <div className="flex items-center gap-3">
//                   {gridIcon}
//                   <span>{link.title}</span>
//                 </div>
//                 {dropdownOpen === index ? (
//                   <ChevronUpIcon className="w-5 h-5 text-pink-400" />
//                 ) : (
//                   <ChevronDownIcon className="w-5 h-5 text-pink-400" />
//                 )}
//               </button>

//               {/* Dropdown Content */}
//               {dropdownOpen === index && (
//                 <div className="relative mt-4 pl-20 pt-1.5">
//                   {/* Curved Line with SVG - Pink version */}
//                   <svg
//                     className="absolute left-7 -top-3.5"
//                     width="33"
//                     height={link.subLinks.length * 48}
//                     viewBox={`0 0 40 ${link.subLinks.length * 48}`}
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* Main vertical line */}
//                     <path
//                       d={`M10 0 V${link.subLinks.length * 35}`}
//                       stroke="#222831" // Pink-400
//                       strokeWidth="2"
//                     />

//                     {/* Curved branches */}
//                     {link.subLinks.map((_, i) => {
//                       const y = i * 48 + 5;
//                       return (
//                         <path
//                           key={i}
//                           d={`
//                     M10 ${y}
//                     C10 ${y + 30}, 50 ${y + 10}, 42 ${y + 21}
//                   `}
//                           stroke="#222831"
//                           strokeWidth="2"
//                           fill="none"
//                         />
//                       );
//                     })}
//                   </svg>

//                   {/* Dropdown Links */}
//                   <div className="flex flex-col gap-4 text-sm">
//                     {link.subLinks.map((sublink, subIdx) => (
//                       <Link
//                         key={subIdx}
//                         // href={link.href}
//                         href={sublink === "BGMI" ? link.href : "/coming-soon"}
//                         onClick={onClose}
//                         className="inline-flex w-fit items-center gap-2 text-[#FFFFFF8F]
//     hover:text-pink-400 hover:bg-pink-500/20
//     pl-2 pr-2 rounded-md transition-all duration-200"
//                       >
//                         {sublink}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Sidebar Footer Promo */}
//         <div className="mt-5">
//           <div className="bg-[#141414] rounded-2xl p-4 text-center text-white shadow-md">
//             <h3 className="font-bold text-lg mb-2">LEVEL UP</h3>
//             <p className="text-sm mb-3">GEAR COMPARISON FOR YOUR GAME PICKS</p>
//             <div className="flex justify-center">
//               <Link href="/shop">
//                 <Button text="Shop Right" onClick={onClose} className="mt-2" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameOnSidebar;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Button from "@/components/Button/Button";
import Image from "next/image";

interface GameOnSidebarProps {
  visible: boolean;
  onClose: () => void;
}

const GameOnSidebar: React.FC<GameOnSidebarProps> = ({ visible, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const gameButtons = [
    {
      key: "bgmi",
      text: "BGMI",
      icon: (
        <Image src="/images/bgmi.svg" alt="BGMI Icon" width={25} height={25} />
      ),
    },
    {
      key: "valorant",
      text: "VALORANT",
      icon: (
        <Image
          src="/images/valorantLogo.png"
          alt="Valorant Icon"
          width={25}
          height={25}
        />
      ),
    },
    {
      key: "csgo",
      text: "CSGO",
      icon: (
        <Image
          src="/images/csgoLogo.png"
          alt="CS GO Icon"
          width={25}
          height={25}
        />
      ),
    },
  ];

  const getGameRoute = (gameKey: string, gameName: string) =>
    `/tournaments?game=${encodeURIComponent(gameKey)}&name=${encodeURIComponent(
      gameName
    )}`;

  const getLeaderboardRoute = (gameKey: string, gameName: string) =>
    `/leaderboard?game=${encodeURIComponent(
      gameKey
    )}&name=${encodeURIComponent(gameName)}`;

  const navLinks = [
    {
      title: "Tournaments",
      href: "/tournaments",
      subLinks: gameButtons.map(game => ({
        text: game.text,
        key: game.key,
        route: getGameRoute(game.key, game.text),
        icon: game.icon
      }))
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      subLinks: gameButtons.map(game => ({
        text: game.text,
        key: game.key,
        route: getLeaderboardRoute(game.key, game.text),
        icon: game.icon
      }))
    },
    {
      title: "Shop Right",
      href: "/shop",
      subLinks: []
    }
  ];

  const gridIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );

  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300",
          {
            hidden: !visible,
          }
        )}
        onClick={onClose}
      ></div>

      <div
        className={classNames(
          "fixed top-0 right-0 h-(500px) w-72 max-w-full mt-14",
          "bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]",
          "z-70 shadow-2xl rounded-l-3xl p-6",
          "transition-transform duration-300 ease-in-out flex flex-col",
          {
            "translate-x-0": visible,
            "translate-x-full": !visible,
          }
        )}
      >
        <div className="flex justify-between gap-1 items-center mx-5 mt-5">
          <h2 className="text-pink-500 font-bold text-xl">GAME ON !!!!!!</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col h-80 mt-5 gap-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.subLinks.length > 0 ? (
                <>
                  <button
                    className="w-full rounded-xl py-3 px-4 text-white flex justify-between items-center
                    bg-gradient-to-r from-[#1a1a1a] via-[#2c1a33] to-[#3c1a4a]
                    hover:from-[#2c1a33] hover:via-[#3c1a4a] hover:to-[#4c1a5a]
                    transition-all duration-300
                    border border-[#3c1a4a] shadow-lg"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center gap-3">
                      {gridIcon}
                      <span>{link.title}</span>
                    </div>
                    {dropdownOpen === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-pink-400" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-pink-400" />
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {dropdownOpen === index && (
                    <div className="relative mt-4 pl-20 pt-1.5">
                      <svg
                        className="absolute left-7 -top-3.5"
                        width="33"
                        height={link.subLinks.length * 48}
                        viewBox={`0 0 40 ${link.subLinks.length * 48}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={`M10 0 V${link.subLinks.length * 35}`}
                          stroke="#222831"
                          strokeWidth="2"
                        />
                        {link.subLinks.map((_, i) => {
                          const y = i * 48 + 5;
                          return (
                            <path
                              key={i}
                              d={`
                                M10 ${y}
                                C10 ${y + 30}, 50 ${y + 10}, 42 ${y + 21}
                              `}
                              stroke="#222831"
                              strokeWidth="2"
                              fill="none"
                            />
                          );
                        })}
                      </svg>

                      <div className="flex flex-col gap-4 text-sm">
                        {link.subLinks.map((sublink, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sublink.route}
                            onClick={onClose}
                            className="inline-flex w-fit items-center gap-2 text-[#FFFFFF8F]
                            hover:text-pink-400 hover:bg-pink-500/20
                            pl-2 pr-2 rounded-md transition-all duration-200"
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sublink.icon}
                            </div>
                            {sublink.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="w-full rounded-xl py-3 px-4 text-white flex justify-between items-center
                  bg-gradient-to-r from-[#1a1a1a] via-[#2c1a33] to-[#3c1a4a]
                  hover:from-[#2c1a33] hover:via-[#3c1a4a] hover:to-[#4c1a5a]
                  transition-all duration-300
                  border border-[#3c1a4a] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    {gridIcon}
                    <span>{link.title}</span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar Footer Promo */}
        <div className="mt-5">
          <div className="bg-[#141414] rounded-2xl p-4 text-center text-white shadow-md">
            <h3 className="font-bold text-lg mb-2">LEVEL UP</h3>
            <p className="text-sm mb-3">GEAR COMPARISON FOR YOUR GAME PICKS</p>
            <div className="flex justify-center">
              <Link href="/shop">
                <Button text="Shop Right" onClick={onClose} className="mt-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameOnSidebar;