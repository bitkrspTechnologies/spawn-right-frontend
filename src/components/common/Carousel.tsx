"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // const slides = [
  //   {
  //     img: "/images/carousel/carousel-one.jpg",
  //     title: "BGMI",
  //     date: "APR 7TH - 13TH",
  //     info: "ALL THE INFO",
  //     link: "/tournaments",
  //   },
  //   {
  //     img: "/images/carousel/carousel-two.jpg",
  //     title: "VALORANT",
  //     date: "APR 14TH - 20TH",
  //     info: "DETAILS HERE",
  //     link: "/tournaments",
  //   },
  //   {
  //     img: "/images/carousel/carousel-three.jpg",
  //     title: "COUNTER STRIKE GO",
  //     date: "APR 21ST - 27TH",
  //     info: "KNOW MORE",
  //     link: "/tournaments",
  //   },
  // ];

  const slides = [
    {
      img: "/images/carousel/carousel-one.jpg",
      title: "BGMI",
      // date: "APR 7TH - 13TH",
      // info: "ALL THE INFO",
      // link: "/tournaments",
    },
    {
      img: "/images/carousel/carousel-two.jpg",
      title: "VALORANT",
      // date: "APR 14TH - 20TH",
      // info: "DETAILS HERE",
      // link: "/tournaments",
    },
    {
      img: "/images/carousel/carousel-four.jpg",
      title: "COUNTER STRIKE GO",
      // date: "APR 21ST - 27TH",
      // info: "KNOW MORE",
      // link: "/tournaments",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className="relative w-full">
      {/* 🔸 Image + Content Wrapper */}
      <div className="relative h-34 overflow-hidden rounded-lg md:h-64 lg:h-90">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`duration-700 ease-in-out ${
              activeSlide === idx ? "block" : "hidden"
            }`}
          >
            {/* <a href={slide.link} target="_blank" rel="noopener noreferrer"> */}
            <Image
              src={slide.img}
              alt={`Slide ${idx + 1}`}
              width={1920}
              height={200}
              objectFit="content"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
            {/* </a> */}

            {/* 🔹 Content that changes with slide */}
            <div className="absolute z-20 left-6 bottom-10 text-white">
              {/* <p className="bg-white text-black px-3 py-1 rounded-md text-sm font-bold inline-block tracking-widest">
                {slide.date}
              </p> */}
              <h2 className="mt-2 text-2xl">{slide.title}</h2>
              {/* <p className="mt-2 text-yellow-300 tracking-widest uppercase">
                {slide.info}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* 🔸 Carousel Indicators */}
      <div className="absolute z-30 flex left-5 bottom-5 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeSlide === i ? "bg-pink-500" : "bg-white"
            } border-2 border-pink-500`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActiveSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
