'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export default function Carousel() {
//   // State to track the active slide index
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveSlide((prevSlide) => (prevSlide + 1) % 3); // Automatically move to the next slide every 3 seconds
//     }, 3000);

//     return () => clearInterval(intervalId); // Clean up interval on component unmount
//   }, []);

//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* 🔹 Top Links */}
//       <div className="absolute top-4 left-4 z-40">
//         <a href="#" className="text-white font-semibold">Link 1</a>
//         <a href="#" className="text-white font-semibold ml-4">Link 2</a>
//       </div>

//       {/* 🔸 Carousel Wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {[1, 2, 3].map((index, idx) => (
//           <div
//             key={index}
//             className={`duration-700 ease-in-out ${activeSlide === idx ? 'block' : 'hidden'}`} // Show only the active slide
//             data-carousel-item
//           >
//             <Image
//               src={`/images/carousel/carousel-${index}.jpg`}
//               alt={`Slide ${index}`}
//               width={1920}
//               height={400}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             />
//           </div>
//         ))}
//       </div>

//       {/* 🔸 Custom Indicators */}
//       <div className="absolute z-30 flex left-5 bottom-5 space-x-3">
//         {[0, 1, 2].map((i) => (
//           <button
//             key={i}
//             type="button"
//             className={`w-3 h-3 rounded-full ${activeSlide === i ? 'bg-pink-500' : 'bg-white'} border-2 border-pink-500`}
//             aria-label={`Slide ${i + 1}`}
//             onClick={() => setActiveSlide(i)} // Manually switch to the clicked slide
//             data-carousel-slide-to={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export default function Carousel() {
//   // State to track the active slide index
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Array of links corresponding to each image
//   const links = [
//     '/page1', // Link for the first image
//     '/page2', // Link for the second image
//     '/page3', // Link for the third image
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveSlide((prevSlide) => (prevSlide + 1) % 3); // Automatically move to the next slide every 3 seconds
//     }, 3000);

//     return () => clearInterval(intervalId); // Clean up interval on component unmount
//   }, []);

//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* 🔹 Top Links */}
//       <div className="absolute top-4 left-4 z-40">
//         <a href="#" className="text-white font-semibold">Link 1</a>
//         <a href="#" className="text-white font-semibold ml-4">Link 2</a>
//       </div>

//       {/* 🔸 Carousel Wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {[1, 2, 3].map((index, idx) => (
//           <div
//             key={index}
//             className={`duration-700 ease-in-out ${activeSlide === idx ? 'block' : 'hidden'}`} // Show only the active slide
//             data-carousel-item
//           >
//             {/* Wrap each image in a link */}
//             <a href={links[idx]} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={`/images/carousel/carousel-${index}.jpg`}
//                 alt={`Slide ${index}`}
//                 width={1920}
//                 height={400}
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               />
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* 🔸 Custom Indicators */}
//       <div className="absolute z-30 flex left-5 bottom-5 space-x-3">
//         {[0, 1, 2].map((i) => (
//           <button
//             key={i}
//             type="button"
//             className={`w-3 h-3 rounded-full ${activeSlide === i ? 'bg-pink-500' : 'bg-white'} border-2 border-pink-500`}
//             aria-label={`Slide ${i + 1}`}
//             onClick={() => setActiveSlide(i)} // Manually switch to the clicked slide
//             data-carousel-slide-to={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      img: '/images/carousel/carousel-1.jpg',
      title: 'BGMI',
      date: 'APR 7TH - 13TH',
      info: 'ALL THE INFO',
      link: '/page1',
    },
    {
      img: '/images/carousel/carousel-2.jpg',
      title: 'VALORANT',
      date: 'APR 14TH - 20TH',
      info: 'DETAILS HERE',
      link: '/page2',
    },
    {
      img: '/images/carousel/carousel-3.jpg',
      title: 'CALL OF DUTY',
      date: 'APR 21ST - 27TH',
      info: 'KNOW MORE',
      link: '/page3',
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
      <div className="relative h-34 overflow-hidden rounded-lg md:h-64">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`duration-700 ease-in-out ${activeSlide === idx ? 'block' : 'hidden'}`}
          >
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={slide.img}
                alt={`Slide ${idx + 1}`}
                width={1920}
                height={200}
                objectFit="content" 
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </a>

            {/* 🔹 Content that changes with slide */}
            <div className="absolute z-20 left-6 bottom-10 text-white">
              <p className="bg-white text-black px-3 py-1 rounded-md text-sm font-bold inline-block tracking-widest">
                {slide.date}
              </p>
              <h2 className="mt-2 text-2xl">{slide.title}</h2>
              <p className="mt-2 text-yellow-300 tracking-widest uppercase">
                {slide.info}
              </p>
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
            className={`w-3 h-3 rounded-full ${activeSlide === i ? 'bg-pink-500' : 'bg-white'} border-2 border-pink-500`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActiveSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
