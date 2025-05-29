"use client"

import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
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
    "CS GO",
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  }

  if (isMobile) {
    return (
      <div className="relative w-full h-[100px] m-0 p-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/MobileBanner.png"
          alt="Mobile Banner"
          fill
          className="object-cover rounded-lg"
          priority
        />

        {/* Mobile Text Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col px-4 pt-3 justify-start"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          {/* Main Title */}
          <motion.div className="flex flex-wrap gap-x-2 mb-1">
            {mainTextWords.map((word, index) => (
              <motion.span
                key={index}
                variants={item}
                className="text-[#FF1ADF] font-bold text-sm drop-shadow-lg"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-[10px]">
            {subTextWords.map((word, index) => (
              <motion.span
                key={index}
                variants={item}
                className="text-gray-200 drop-shadow-md"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[100px] my-3">
      <Image
        src="/images/banner.svg"
        alt="Desktop Banner"
        fill
        className="object-contain rounded-xl"
        priority
      />

      {/* Desktop Text Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col px-8 justify-center"
        variants={container}
        initial="hidden"
        animate={isMounted ? "show" : "hidden"}
      >
        {/* Main Title */}
        <motion.div className="flex gap-3 mb-3 flex-wrap">
          {mainTextWords.map((word, index) => (
            <motion.span
              key={index}
              variants={item}
              className="text-[#FF1ADF] font-bold text-lg lg:text-xl drop-shadow-lg"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.div className="flex flex-wrap gap-x-3 gap-y-1 text-xs lg:text-xs max-w-4xl">
          {subTextWords.map((word, index) => (
            <motion.span
              key={index}
              variants={item}
              className="text-gray-200 drop-shadow-md"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Banner