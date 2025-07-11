"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const mainTextWords = ["Track", "•", "Rank", "•", "Dominate"]
  const subTextWords = [
    "All",
    "BGMI,",
    "VALORANT",
    "&",
    "CS:GO",
    "Tournaments,",
    "Player",
    "rankings",
    "and",
    "game",
    "insights",
    "-",
    "Finally",
    "in",
    "one",
    "place",
  ]

  // Animation variants for left entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: -5
    },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={backgroundVariants}
        className="relative w-full my-3 overflow-hidden rounded-xl"
        style={{ height: 'clamp(120px, 30vw, 180px)' }} // Responsive height
      >
        {/* Background Image */}
        <Image
          src="/images/banner.svg"
          alt="Banner"
          fill
          className="object-cover md:object-contain"
          priority
        />

        {/* Text Content - Coming from left */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          {/* Main Title */}
          <motion.div className="flex flex-wrap items-center gap-x-1 sm:gap-x-3 mb-1 sm:mb-3">
            {mainTextWords.map((word, index) => (
              <motion.span
                key={index}
                variants={item}
                data-glitch={word}
                className={`glitch font-bold text-lg sm:text-xl lg:text-2xl drop-shadow-lg`} // Responsive font size
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle - adjusted for mobile */}
          <motion.div className="flex flex-wrap items-center gap-x-1 sm:gap-x-2 gap-y-0">
            {subTextWords.map((word, index) => (
              <motion.span
                key={index}
                variants={item}
                className={`text-gray-200 text-xs sm:text-sm lg:text-base drop-shadow-md ${
                  // Hide some words on very small screens to prevent overflow
                  index > 8 && 'hidden xs:inline-block'
                }`}
                transition={{ type: "spring", stiffness: 400 }}
                custom={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated left border */}
        <motion.div
          className="absolute top-0 left-0 w-1 h-full"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Banner