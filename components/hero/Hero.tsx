'use client';
import { motion } from 'motion/react';
import { TextScramble } from '@/components/common/TextScramble';
import Image from 'next/image';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative w-full py-8 h-auto flex flex-col bg-cover bg-center font-mono"
      style={{ backgroundImage: 'url(/bg-min.png)' }}
    >
      <header className="relative max-w-screen-2xl z-20 w-full pt-4 px-4 sm:px-6 lg:px-20 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/Logo.svg" alt="Lowercase B Logo" height={64} width={64} priority />
        </div>
        <div className="flex items-center">{/* nav links go here */}</div>
      </header>

      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>

      <motion.div
        className="z-10 max-w-screen-2xl p-4 sm:p-6 lg:p-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <TextScramble
            as="h1"
            className="text-xl sm:text-2xl md:text-xl tracking-widest font-semibold text-slate-300/80"
            duration={1}
          >
            LOWERCASE B
          </TextScramble>
        </motion.div>
        <div className="flex flex-col gap-2">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-8xl font-bold text-white tracking-tight uppercase"
            variants={itemVariants}
          >
            AEGIS FUND
          </motion.h2>
          <motion.p className="text-sm sm:text-xl md:text-xl text-white uppercase" variants={itemVariants}>
            Building the Next Generation of Iconic Companies
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
