"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import { StickyScroll } from "@/components/About/StickyScrollReveal/StickyScrollReveal";
import TeamAccordion from "@/components/About/TeamAccordion/TeamAccordion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const mobileQuery = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(mobileQuery);
  }, [mobileQuery]);

  const content = [
    {
      title: "Why We Exist",
      description:
        "Because esports deserves better. Better coverage. Better structure. Better visibility.Spawn Right unites competitive gaming under one roof, enabling you to follow matches, track placements, and scout talent across mobile-first titles.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Our vision?",
      description:
        "To be the Cricbuzz for global esports. But cooler. Faster. Built by gamers.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    // {
    //   title: "Version control",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
    //       Version control
    //     </div>
    //   ),
    // },
    // {
    //   title: "Running out of content",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
    //       Running out of content
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white overflow-y-auto scrollbar-hide">
        <main className="pt-24 pb-20 h-[calc(100vh-64px)]">
          <motion.section
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="relative w-full flex items-center justify-center min-h-[60vh] px-4"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 text-center max-w-4xl"
            >
              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl font-light mb-6"
              >
                Built for Gamers. Backed by Data. Designed for the Future of
                Esports.
              </motion.h1>
              <motion.p
                variants={item}
                className="text-xl md:text-2xl text-white/90 font-light mb-8"
              >
                Spawn Right is on a mission to become the global command centre
                for esports – a home for real-time updates, tournament tracking,
                and competitive leaderboards across the biggest titles in
                gaming.
              </motion.p>
              <motion.p
                variants={item}
                className="text-xl md:text-2xl text-white/90 font-light mb-8"
              >
                From BGMI to COD Mobile to Indus, we connect millions of
                players, fans, and teams with the pulse of every match – live,
                accurate, and effortlessly accessible.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Mission Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInFromLeft}
                className="md:w-1/2"
              >
                <h2 className="text-3xl font-light mb-6">Our Mission</h2>
                <p className="text-lg text-gray-400 mb-6">
                  Whether you're grinding the ranks or tracking your favourite
                  team, Spawn Right delivers:
                </p>
                <ul className="text-lg text-gray-400 mb-6 space-y-2">
                  <li>
                    <strong>Live Scores</strong> that update in seconds
                  </li>
                  <li>
                    <strong>Tournament Dashboards</strong> across major
                    platforms
                  </li>
                  <li>
                    <strong>Real-Time Rankings</strong> of players and squads
                  </li>
                  <li>
                    <strong>Data-backed insights</strong> into every clutch,
                    drop, and finish
                  </li>
                </ul>
                <p className="text-lg text-gray-400">
                  We're not just building a platform - we're building the{" "}
                  <strong>operating system of competitive gaming</strong>.
                </p>
              </motion.div>

              {!isMobile && (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={slideInFromRight}
                  className="md:w-1/2"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="/public/images/gamecarousel/apexLegends.jpg"
                      alt="Mission Illustration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </section>
          <div className="w-full py-20">
            <StickyScroll content={content} />
          </div>
          <div className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <TeamAccordion />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
