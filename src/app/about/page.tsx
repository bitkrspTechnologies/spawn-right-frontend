"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import { StickyScroll } from "@/components/About/StickyScrollReveal/StickyScrollReveal";
import TeamAccordion from "@/components/About/TeamAccordion/TeamAccordion";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Link from "next/link";

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
        "Because esports deserves better. Better coverage. Better structure. Better visibility. Spawn Right unites competitive gaming under one roof, enabling you to follow matches, track placements, and scout talent across mobile-first titles.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/gamecarousel/Vision1.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="Why we exist"
          />
        </div>
      ),
    },
    {
      title: "Our Vision",
      description:
        "To be the Cricbuzz for global esports. But cooler. Faster. Built by gamers.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/gamecarousel/Vision2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="Our vision"
          />
        </div>
      ),
    },
    {
      title: "The Founding Crew",
      description:
        "We're a team of mobile gamers who found our passion during the COVID-19 lockdowns—hours of gameplay turned into a full-blown obsession. As we climbed ranks and grinded through tournaments, one thing became clear: mobile gamers were putting in the work, but getting none of the ecosystem.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/gamecarousel/Vision3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="Founding crew"
          />
        </div>
      ),
    },
    {
      title: "Where We're Headed",
      description:
        "Our roadmap includes: Fantasy esports, Player analytics, Gamified leaderboards, Creator integrations, And global expansion. If you're a gamer, brand, Tournament Organizer or a content creator — Spawn Right is where you'll be seen.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/gamecarousel/Vision4.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="Our future"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white overflow-y-auto scrollbar-hide ">
        <main className="pt-24 h-[calc(100vh-64px)]">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 text-center w-full"
            >
              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text  text-white"
              >
                Built for Gamers. Backed by Data.
              </motion.h1>
              <motion.p
                variants={item}
                className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Spawn Right is on a mission to become the global command centre
                for esports – a home for real-time updates, tournament tracking,
                and competitive leaderboards across the biggest titles in
                gaming.
              </motion.p>
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-gray-400 font-light mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                From BGMI to COD Mobile to Indus, we connect millions of
                players, fans, and teams with the pulse of every match – live,
                accurate, and effortlessly accessible.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Mission Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInFromLeft}
                className="md:w-1/2 w-full"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text  text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Whether you're grinding the ranks or tracking your favourite
                  team, Spawn Right delivers:
                </p>
                <ul className="text-lg text-gray-300 mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-white">Live Scores</strong> that
                      update in seconds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-white">
                        Tournament Dashboards
                      </strong>{" "}
                      across major platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-white">Real-Time Rankings</strong>{" "}
                      of players and squads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      <strong className="text-white">
                        Data-backed insights
                      </strong>{" "}
                      into every clutch, drop, and finish
                    </span>
                  </li>
                </ul>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're not just building a platform - we're building the{" "}
                  <strong className="text-white">
                    operating system of competitive gaming
                  </strong>
                  .
                </p>
              </motion.div>

              {!isMobile && (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={slideInFromRight}
                  className="md:w-1/2 w-full"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-lg shadow-purple-500/10">
                    <Image
                      src="/images/gamecarousel/missonImage.png"
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

          {/* Founding Story Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto bg-black/50 rounded-2xl my-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-8 bg-clip-text  text-white">
                The Founding Story
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We're a team of mobile gamers who found our passion during the
                  COVID-19 lockdowns—hours of gameplay turned into a full-blown
                  obsession. As we climbed ranks and grinded through
                  tournaments, one thing became clear: mobile gamers were
                  putting in the work, but getting none of the ecosystem.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  PC gamers had it all—dedicated platforms, ranking systems,
                  tournament coverage, gear guides. But for mobile gamers?
                  Nothing centralized. No recognition. No structure. No one-stop
                  platform to track progress, compete, or grow.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  That's why we built Spawn-right—India's first platform
                  dedicated to creating a complete ecosystem for mobile gamers.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Sticky Scroll Section */}
          <section className="w-full max-w-6xl mx-auto py-20">
            <StickyScroll content={content} />
          </section>

          {/* Roadmap Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text  text-white">
                Where We're Headed
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Fantasy esports",
                  "Player analytics",
                  "Gamified leaderboards",
                  "Creator integrations",
                  "Global expansion",
                  "Mobile gaming ecosystem",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <span className="text-purple-400">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item}
                      </h3>
                    </div>
                    <p className="text-gray-400">
                      Coming soon as part of our roadmap to revolutionize mobile
                      esports.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Team Section */}
          <section className="py-10 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-white">
                Meet The Team
              </h2>
              <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                Built by gamers. For gamers. This is where mobile gaming levels
                up.
              </p>
              <TeamAccordion />
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="pb-10 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-black/50 flex flex-col justify-center items-center p-12 rounded-2xl border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text  text-white">
                Join the Revolution
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                If you're a gamer, brand, Tournament Organizer or a content
                creator — Spawn Right is where you'll be seen.
              </p>
              <Link href={"/"}>
                <Button
                  text="Get Started"
                  className="text-center cursor-pointer"
                />
              </Link>
            </motion.div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
