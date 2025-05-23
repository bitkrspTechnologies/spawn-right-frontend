"use client";

import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Button from "@/components/Button/Button"

interface GameOnSidebarProps {
    visible: boolean;
    onClose: () => void;
}

const GameOnSidebar: React.FC<GameOnSidebarProps> = ({ visible, onClose }) => {
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setDropdownOpen((prev) => (prev === index ? null : index));
    };

    const navLinks = [
        {
            title: "Live Matches",
            href: "/tournaments",
            subLinks: ["BGMI", "Valorant", "COD"],
        },
        {
            title: "TOURNAMENT TRACKER",
            href: "/leaderboard",
            subLinks: ["BGMI", "Valorent", "COD"],
        },
        {
            title: "LEADERBOARD",
            href: "/shop",
            subLinks: ["BGMI", "Valorent", "COD"],
        },
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
                    "fixed top-0 right-0 h-(500px) w-72 max-w-full",
                    "bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]",
                    "z-50 shadow-2xl rounded-l-3xl p-6",
                    "transition-transform duration-300 ease-in-out flex flex-col",
                    {
                        "translate-x-0": visible,
                        "translate-x-full": !visible,
                    }
                )}
            >
                <div className="flex justify-between items-center m-7 mb-6">
                    <h2 className="text-pink-500 font-bold text-xl">GAME ON !!!!!!</h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                </div>

                {/* Navigation Links with Dropdown */}
                <div className="flex flex-col h-70 mt-10 gap-4">
                    {navLinks.map((link, index) => (
                        <div key={index}>
                            <button
                                className="w-full bg-[#2c2c2e] rounded-xl py-3 px-4 text-white flex justify-between items-center"
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
                                <div className="ml-6 mt-3 flex flex-col text-sm text-white">
                                    {link.subLinks.map((sublink, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            href={link.href}
                                            onClick={onClose}
                                            className="hover:text-pink-400 mt-3 transition-colors"
                                        >
                                            <div className="flex items-center leading-tight">
                                                {subIdx === link.subLinks.length - 1 ? (
                                                    <ChevronRightIcon className="w-4 h-4 text-pink-400" />
                                                ) : (
                                                    <ChevronRightIcon className="w-4 h-4 text-pink-400" />
                                                )}
                                                <span className="ml-1 text-white">{sublink}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                {/* Sidebar Footer Promo */}
                <div className="mt-auto pt-10">
                    <div className="bg-[#141414] rounded-2xl p-4 text-center text-white shadow-md">
                        <h3 className="font-bold text-lg mb-2">LEVEL UP</h3>
                        <p className="text-sm mb-3">GEAR COMPARISON FOR YOUR GAME PICKS</p>
                        <div className="flex justify-center">

                            <Button
                                text="Shop Right"
                                onClick={onClose}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameOnSidebar;
