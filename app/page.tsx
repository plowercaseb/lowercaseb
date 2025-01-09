'use client';
import { TextShimmer } from '@/components/common/TextShimmer';
import { TextEffect } from '@/components/common/TextEffect';
import Hero from '@/components/hero/Hero';
import { Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // const headingVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col gap-16 font-mono">
        <Hero />

        <section>
          <motion.div
            className="flex flex-col gap-12 justify-center px-4 sm:px-6 lg:px-20 max-w-screen-lg mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            <motion.div
              variants={sectionVariants}
              className="relative overflow-hidden w-full px-4 py-2 flex flex-col text-center"
            >
              {/* <motion.h3
                variants={headingVariants}
                className="text-xl md:text-2xl font-bold mb-4 font-mono text-amber-100/80 relative z-10"
              >
                Mission Statement
              </motion.h3>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-600/30 to-transparent z-0"></div> */}
              <TextEffect className="text-white font-mono font-light text-lg md:text-md leading-relaxed mt-4">
                Lowercase B Ventures presents the Aegis Fund, an early-stage fund to back transformative AI-native
                startups. Our strategy focuses on companies developing scalable, AI-powered applications in three
                primary sectors: Enterprise SaaS, Cybersecurity, and Defense/Industrial technologies. We are uniquely
                positioned to capitalize on this opportunity due to our founder-first approach, deep operational
                expertise, and unrivaled professional networks.
              </TextEffect>
            </motion.div>

            {/* <motion.div variants={sectionVariants} className="relative overflow-hidden w-full p-6 flex flex-col">
              <motion.h3
                variants={headingVariants}
                className="text-xl md:text-2xl font-bold mb-4 font-mono text-amber-100/80 relative z-10"
              >
                Investment Philosophy
              </motion.h3>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-700/30 to-transparent z-0"></div>
              <h4 className="text-md md:text-lg font-semibold mb-2 font-mono text-white/60 mt-4">
                Crafting the Future with Purpose
              </h4>
              <p className="text-white font-mono text-sm md:text-md leading-relaxed">
                Our investment philosophy is rooted in the belief that iconic companies are built with intention,
                resilience, and vision. Inspired by the craftsmanship of the past, we apply a boutique, hands-on
                approach to help founders turn bold ideas into impactful realities. We focus on pre-seed, seed, and
                Series A stages, aligning our expertise with founders who are ready to scale their innovations and make
                history.
              </p>
            </motion.div> */}
          </motion.div>
        </section>

        <section className="relative py-32">
          <div className="absolute inset-0 bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h5 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions? Let&apos;s connect.</h5>
            <a
              href="mailto:team@lowercaseb.com"
              className="text-slate-800 p-4 rounded-md hover:text-slate-800/80 transition-colors bg-slate-100 text-lg"
            >
              team@lowercaseb.com
            </a>
          </motion.div>
        </section>
      </main>
      <footer className="flex flex-col gap-6 px-4 sm:px-6 lg:px-20 py-4 relative backdrop-blur-sm border-t border-slate-100/20">
        <div className="w-full p-4 md:flex md:items-center md:justify-between">
          <TextShimmer as="p" className="text-sm text-amber-100/60 font-mono sm:text-center">
            © 2024 Lowercase B. All Rights Reserved.
          </TextShimmer>
          <ul className="flex items-center mt-3 sm:mt-0 gap-4">
            <li>
              <a
                href="https://www.linkedin.com/company/lowercase-b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100/60 hover:text-amber-100/80 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Lowercaseb_Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100/60 hover:text-amber-100/80 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
