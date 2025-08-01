"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDown } from "lucide-react";
import GameOnSidebar from "@/components/Sidebar/Sidebar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Set loaded state after initial render
    setIsLoaded(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-sm bg-black/5",
        {
          "shadow-lg": scrolled,
        }
      )}
      style={{
        minHeight: "80px",
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(-10px)",
      }}
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
      <div className="backdrop-blur-sm bg-black/5 max-w-7xl mx-auto px-6 py-3 flex justify-between items-center h-[80px] relative z-[100]">
        <Link href="/">
          <Image
            src="/images/Logos-03.svg"
            alt="Logo"
            width={200}
            height={200}
            className="hover:opacity-90 transition-opacity"
            priority // Add priority to load image first
          />
        </Link>

        <div className="hidden md:flex items-center space-x-9 text-sm">
          {/* Tournaments Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[var(--highlight)] hover:text-white transition-colors font-medium focus:outline-none px-2 py-1">
              Tournaments
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 w-56 bg-[#1a1a2e] border border-pink-500/30 rounded-lg shadow-xl backdrop-blur-lg bg-opacity-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200] transform group-hover:translate-y-1">
              {gameButtons.map((game) => (
                <Link
                  href={getGameRoute(game.key, game.text)}
                  key={game.key}
                  className="block px-4 py-3 hover:bg-pink-500/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center text-pink-400">
                      {game.icon}
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {game.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Leaderboard Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[var(--highlight)] hover:text-white transition-colors font-medium focus:outline-none px-2 py-1">
              Leaderboard
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 w-56 bg-[#1a1a2e] border border-pink-500/30 rounded-lg shadow-xl backdrop-blur-lg bg-opacity-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200] transform group-hover:translate-y-1">
              {gameButtons.map((game) => (
                <Link
                  href={getLeaderboardRoute(game.key, game.text)}
                  key={game.key}
                  className="block px-4 py-3 hover:bg-pink-500/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center text-pink-400">
                      {game.icon}
                    </div>
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {game.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/shop">
            <Button
              text="Shop Right"
              className="hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Open sidebar"
          >
            <Bars3Icon className="h-7 w-7 text-white" />
          </button>
        </div>
      </div>

      {pathname === "/" && (
        <div className="pt-1 pb-3 w-full transition-all duration-500 z-[50] relative">
          <div className="flex gap-3 max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
            {gameButtons.map(({ key, text, icon }) => (
              <Button
                key={key}
                text={text}
                icon={icon}
                fullWidth
                className="flex justify-center items-center min-w-[100px] cursor-pointer"
                selected={selectedBtn === key}
                onClick={() => {
                  setSelectedBtn(key);
                  router.push(getGameRoute(key, text));
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      <GameOnSidebar
        visible={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </header>
  );
}
