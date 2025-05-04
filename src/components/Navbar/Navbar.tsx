'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import Button from '../Button/Button';
import React from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed p-2 top-0 left-0 w-full z-50 transition-all duration-300',
        {
          'backdrop-blur-lg bg-black/60 shadow-md': scrolled,
          'bg-transparent': !scrolled,
        }
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <Image
            src="/images/Logos-03.svg"
            alt="Logo"
            width={200}
            height={200}
          />
          
        </div>

        <div className="flex items-center space-x-9 text-sm">
          <Link href="/tournaments" className="text-[var(--highlight)]">
            Tournaments
          </Link>
          <Link href="/leaderboard" className="text-[var(--highlight)]">
            Leaderboard
          </Link>
          <Link href="/shop">
           <Button text='Spawn Right'/>
          </Link>
        </div>
      </nav>
    </header>
  );
}
