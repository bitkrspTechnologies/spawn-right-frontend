"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button from "../Button/Button";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("bgmi");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gameButtons = [
    {
      key: "bgmi",
      text: "BGMI",
      icon: (
        <Image src="/images/bgmi.svg" alt="BGMI Icon" width={34} height={34} />
      ),
    },
    {
      key: "Valorant",
      text: "VALORANT",
      icon: (
        <Image
          src="/images/valorantLogo.png"
          alt="COD Icon"
          width={35}
          height={35}
        />
      ),
    },
    {
      key: "cs go",
      text: "CS GO",
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

      <Disclosure as="nav" className="max-w-7xl mx-auto px-6 py-3">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/Logos-03.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Desktop Menu */}
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

              {/* Mobile Hamburger Icon Only */}
              <div className="md:hidden">
                <button className="text-white">
                  <Image
                    src="/images/icons/menu-dots-corner.png"
                    alt="Menu"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
            {/* Mobile Menu Items */}
            <DisclosurePanel className="md:hidden mt-2 space-y-1 bg-white text-black rounded shadow-lg p-3">
              <Link
                href="/tournaments"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Tournaments
              </Link>
              <Link
                href="/leaderboard"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Leaderboard
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Shop Right
              </Link>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <div
        className={`pt-1 pb-3 w-full z-50 transition-all duration-500 ease-in-out`}
      >
        <div className="flex gap-3 max-w-7xl mx-auto px-6">
          {gameButtons.map(({ key, text, icon }) => (
            <Button
              key={key}
              text={text}
              icon={icon}
              fullWidth
              className="flex justify-center items-center"
              selected={selectedBtn === key}
              onClick={() => setSelectedBtn(key)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
