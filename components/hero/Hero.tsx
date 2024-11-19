'use client';
import { motion } from 'motion/react';
import { TextScramble } from '@/components/common/TextScramble';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const MotionDiv = motion.create('div');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section
      className="relative w-full h-auto flex flex-col bg-cover bg-center font-mono"
      style={{ backgroundImage: 'url(/bg-min.png)' }}
    >
      <header
        className={`fixed w-full z-20 top-0 start-0 p-4 transition-colors duration-200 ${
          hasScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : ''
        }`}
      >
        <div className="flex max-w-screen-xl mx-auto justify-center">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Image src="/Logo.svg" alt="Lowercase B Logo" height={64} width={64} priority />
            </div>
            <div className="flex">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-300 rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <nav
              className={`items-center justify-between ${
                isMenuOpen ? 'flex' : 'hidden'
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-700 rounded-lg bg-slate-800 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                  <a
                    href="#team"
                    className="block py-2 px-3 text-white hover:bg-slate-700 rounded md:hover:bg-transparent md:hover:text-slate-300"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="block py-2 px-3 text-white hover:bg-slate-700 rounded md:hover:bg-transparent md:hover:text-slate-300"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 px-3 text-white hover:bg-slate-700 rounded md:hover:bg-transparent md:hover:text-slate-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#social"
                    className="block py-2 px-3 text-white hover:bg-slate-700 rounded md:hover:bg-transparent md:hover:text-slate-300"
                  >
                    Social
                  </a>
                </li>
                <li>
                  <a
                    href="#podcast"
                    className="block py-2 px-3 text-white hover:bg-slate-700 rounded md:hover:bg-transparent md:hover:text-slate-300"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>

      <MotionDiv className="z-10 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-6 py-32 md:py-40">
        <TextScramble
          as="h1"
          className="text-xl sm:text-2xl md:text-xl tracking-widest font-semibold text-slate-300/80"
          duration={1}
        >
          LOWERCASE B VENTURES
        </TextScramble>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white tracking-tight uppercase">AEGIS FUND</h2>
          <p className="text-sm sm:text-xl md:text-xl text-white uppercase">
            Building the Next Generation of Iconic Companies
          </p>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
