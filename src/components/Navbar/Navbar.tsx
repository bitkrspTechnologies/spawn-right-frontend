
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import classNames from "classnames";
// import Button from "../Button/Button";
// import React from "react";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// // import { GameOnSidebar } from "../Sidebar/Sidebar";
// import GameOnSidebar from "@/components/Sidebar/Sidebar"; // ✅ make sure path is correct

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedBtn, setSelectedBtn] = useState("bgmi");

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
//       icon: (
//         <Image src="/images/bgmi.svg" alt="BGMI Icon" width={34} height={34} />
//       ),
//     },
//     {
//       key: "Valorant",
//       text: "VALORANT",
//       icon: (
//         <Image
//           src="/images/valorantLogo.png"
//           alt="VALORANT Icon"
//           width={35}
//           height={35}
//         />
//       ),
//     },
//     {
//       key: "cs go",
//       text: "CS GO",
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

//   return (
//     <header
//       className={classNames(
//         "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-sm bg-black/5",
//         {
//           "shadow-lg": scrolled,
//         }
//       )}
//     >
//       {/* Gradient bottom border */}
//       <div
//         className={classNames(
//           "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--highlight)] to-transparent",
//           {
//             "opacity-50": scrolled,
//             "opacity-30": !scrolled,
//           }
//         )}
//       />

//       {/* Navbar Main */}
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/images/Logos-03.svg"
//             alt="Logo"
//             width={200}
//             height={200}
//             className="hover:opacity-90 transition-opacity"
//           />
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-9 text-sm">
//           <Link
//             href="/tournaments"
//             className="text-[var(--highlight)] hover:text-white transition-colors font-medium"
//           >
//             Tournaments
//           </Link>
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

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-white focus:outline-none"
//           >
//             <Bars3Icon className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Game Buttons */}
//       <div className="pt-1 pb-3 w-full z-50 transition-all duration-500">
//         <div className="flex gap-3 max-w-7xl mx-auto px-6 overflow-x-auto">
//           {gameButtons.map(({ key, text, icon }) => (
//             <Button
//               key={key}
//               text={text}
//               icon={icon}
//               fullWidth
//               className="flex justify-center items-center min-w-[100px]"
//               selected={selectedBtn === key}
//               onClick={() => setSelectedBtn(key)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ✅ GameOnSidebar Component for Mobile */}
//       <GameOnSidebar visible={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import GameOnSidebar from "@/components/Sidebar/Sidebar";

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
        <Image src="/images/bgmi.svg" alt="BGMI Icon" width={34} height={34} />
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
          width={35}
          height={35}
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
          width={35}
          height={35}
        />
      ),
    },
  ];

  const handleGameButtonClick = (key: string, hasData: boolean) => {
    setSelectedBtn(key);
    if (hasData) {
      router.push("/tournaments");
    } else {
      router.push("/commingsoon");
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
          <Link
            href="/tournaments"
            className="text-[var(--highlight)] hover:text-white transition-colors font-medium"
          >
            Tournaments
          </Link>
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

      {/* Game Buttons */}
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
      </div>

      {/* Mobile Sidebar */}
      <GameOnSidebar
        visible={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </header>
  );
}