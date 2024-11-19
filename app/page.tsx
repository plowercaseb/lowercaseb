'use client';
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

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col gap-16 font-mono">
        <Hero />

        <section>
          <motion.div
            className="flex flex-col gap-12 justify-center mx-auto px-4 sm:px-6 lg:px-20 max-w-screen-lg"
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
            <motion.div variants={sectionVariants} className="relative overflow-hidden w-full p-6 flex flex-col">
              <motion.h3
                variants={headingVariants}
                className="text-xl md:text-2xl font-bold mb-4 font-mono text-amber-100/80 relative z-10"
              >
                Mission Statement
              </motion.h3>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-600/30 to-transparent z-0"></div>
              <p className="text-white font-mono text-sm md:text-md leading-relaxed mt-4">
                At Lowercase B&apos;s Aegis Fund, we are dedicated to partnering with the world&apos;s best founders to
                build the next generation of iconic companies. By investing early in transformative ideas, we empower
                visionary leaders to redefine industries and leave a lasting legacy. Our hands-on approach combines
                strategic guidance, operational expertise, and a commitment to excellence, ensuring every company we
                back is set on a path to success.
              </p>
            </motion.div>

            <motion.div variants={sectionVariants} className="relative overflow-hidden w-full p-6 flex flex-col">
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
            </motion.div>
          </motion.div>
        </section>

        <section className="relative py-32">
          <div className="absolute inset-0 bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle_80px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions? Let&apos;s connect.</h2>
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
          <span className="text-sm text-amber-100/60 font-mono sm:text-center">
            © 2024 Lowercase B. All Rights Reserved.
          </span>
          <ul className="flex items-center mt-3 sm:mt-0 gap-4">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100/60 hover:text-amber-100/80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100/60 hover:text-amber-100/80 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
