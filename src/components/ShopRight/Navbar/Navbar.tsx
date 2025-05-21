"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
// import Button from "../Button/Button";
import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href={"/shop"}>
            <Image
              src="/images/ShopRight.png"
              alt="Logo"
              width={200}
              height={200}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-9 text-sm">
          <Link
            href="/about"
            className="text-[var(--highlight)] hover:text-white transition-colors duration-300 font-medium"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-[var(--highlight)] hover:text-white transition-colors duration-300 font-medium"
          >
            Spawn Right
          </Link>
        </div>
      </nav>
    </header>
  );
}
