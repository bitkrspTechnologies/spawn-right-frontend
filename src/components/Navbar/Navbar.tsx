"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import GameOnSidebar from "@/components/Sidebar/Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gameButtons = [
    {
      key: "bgmi",
      text: "BGMI",
      hasData: true,
      icon: (
        <Image src="/images/bgmi.svg" alt="BGMI Icon" width={25} height={25} />
      ),
    },
    {
      key: "valorant",
      text: "VALORANT",
      hasData: false,
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
      text: "CS GO",
      hasData: false,
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

  const handleGameButtonClick = (key: string, hasData: boolean) => {
    setSelectedBtn(key);
    if (hasData) {
      router.push("/tournaments");
    } else {
      router.push("/coming-soon");
    }
  };

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-sm bg-black/5",
        {
          "shadow-lg": scrolled,
        }
      )}
    >
      <div
        className={classNames(
          "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--highlight)] to-transparent",
          {
            "opacity-50": scrolled,
            "opacity-30": !scrolled,
          }
        )}
      />

      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/Logos-03.svg"
            alt="Logo"
            width={200}
            height={200}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-9 text-sm">
  <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-[var(--highlight)] hover:text-white transition-colors font-medium focus:outline-none">
                Tournaments
                  <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              className="w-48 bg-[var(--background)] border border-[var(--highlight)] rounded-lg shadow-lg overflow-hidden"
              sideOffset={5}
            >
              {gameButtons.map((game) => (
                <DropdownMenuItem
                  key={game.key}
                  className="px-4 py-2 hover:bg-[var(--highlight)/10%] focus:bg-[var(--highlight)/20%] focus:text-white cursor-pointer transition-colors"
                  onClick={() => handleGameButtonClick(game.key, game.hasData)}
                >
                  <div className="flex items-center gap-3 text-xs">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {game.icon}
                    </div>
                    <span>{game.text}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/leaderboard"
            className="text-[var(--highlight)] hover:text-white transition-colors font-medium"
          >
            Leaderboard
          </Link>
          <Link href="/shop">
            <Button
              text="Shop Right"
              className="hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Game Buttons
      <div className="pt-1 pb-3 w-full z-50 transition-all duration-500">
        <div className="flex gap-3 max-w-7xl mx-auto px-6 overflow-x-auto">
          {gameButtons.map(({ key, text, icon, hasData }) => (
            <Button
              key={key}
              text={text}
              icon={icon}
              fullWidth
              className="flex justify-center items-center min-w-[100px]"
              selected={selectedBtn === key}
              onClick={() => handleGameButtonClick(key, hasData)}
            />
          ))}
        </div>
      </div> */}

      {/* Mobile Sidebar */}
      <GameOnSidebar
        visible={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </header>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import classNames from "classnames";
// import Button from "../Button/Button";
// import { useRouter } from "next/navigation";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import GameOnSidebar from "@/components/Sidebar/Sidebar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedBtn, setSelectedBtn] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const gameButtons = [
//     {
//       key: "bgmi",
//       text: "BGMI",
//       hasData: true,
//       icon: (
//         <Image src="/images/bgmi.svg" alt="BGMI Icon" width={34} height={34} />
//       ),
//     },
//     {
//       key: "valorant",
//       text: "VALORANT",
//       hasData: false,
//       icon: (
//         <Image
//           src="/images/valorantLogo.png"
//           alt="Valorant Icon"
//           width={35}
//           height={35}
//         />
//       ),
//     },
//     {
//       key: "csgo",
//       text: "CS GO",
//       hasData: false,
//       icon: (
//         <Image
//           src="/images/csgoLogo.png"
//           alt="CS GO Icon"
//           width={35}
//           height={35}
//         />
//       ),
//     },
//   ];

//   const handleGameButtonClick = (key: string, hasData: boolean) => {
//     setSelectedBtn(key);
//     if (hasData) {
//       router.push("/tournaments");
//     } else {
//       router.push("/coming-soon");
//     }
//   };

//   return (
//     <header
//       className={classNames(
//         "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-sm bg-black/5",
//         {
//           "shadow-lg": scrolled,
//         }
//       )}
//     >
//       <div
//         className={classNames(
//           "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--highlight)] to-transparent",
//           {
//             "opacity-50": scrolled,
//             "opacity-30": !scrolled,
//           }
//         )}
//       />

//       {/* Top Navbar */}
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         <Link href="/">
//           <Image
//             src="/images/Logos-03.svg"
//             alt="Logo"
//             width={200}
//             height={200}
//             className="hover:opacity-90 transition-opacity"
//           />
//         </Link>

//         <div className="hidden md:flex items-center space-x-9 text-sm">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="text-[var(--highlight)] hover:text-white transition-colors font-medium focus:outline-none">
//                 Tournaments
//               </button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-48 bg-[var(--background)] border-[var(--highlight)]">
//               {gameButtons.map((game) => (
//                 <DropdownMenuItem
//                   key={game.key}
//                   className="focus:bg-[var(--highlight)] focus:text-white cursor-pointer"
//                   onClick={() => handleGameButtonClick(game.key, game.hasData)}
//                 >
//                   <div className="flex items-center gap-2">
//                     {game.icon}
//                     {game.text}
//                   </div>
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <Link
//             href="/leaderboard"
//             className="text-[var(--highlight)] hover:text-white transition-colors font-medium"
//           >
//             Leaderboard
//           </Link>
//           <Link href="/shop">
//             <Button
//               text="Shop Right"
//               className="hover:scale-105 transition-transform"
//             />
//           </Link>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-white focus:outline-none"
//           >
//             <Bars3Icon className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <GameOnSidebar
//         visible={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//       />
//     </header>
//   );
// }
