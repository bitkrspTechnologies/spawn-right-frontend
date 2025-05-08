// import React, { ReactNode } from 'react';
// import { EmblaOptionsType } from 'embla-carousel';
// import Carousel, {
//   Slider,
//   SliderContainer,
//   SliderDotButton,
//   SliderNextButton,
//   SliderPrevButton,
// } from "@/components/ui/Carousel";
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import { imgPreview } from '@/components/website/constant';

// function DefaultSlider() {
//   const OPTIONS: EmblaOptionsType = { loop: false };
//   return (
//     <>
//       <Carousel options={OPTIONS}>
//         <SliderContainer>
//           <Slider className='w-full'>
//             <div className='bg-blue-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
//           </Slider>
//           <Slider className='w-full'>
//             <div className='bg-green-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
//           </Slider>
//           <Slider className='w-full'>
//             <div className='bg-yellow-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
//           </Slider>
//           <Slider className='w-full'>
//             <div className='bg-red-500 md:h-[500px] sm:h-full h-[300px] w-full rounded-lg'></div>
//           </Slider>
//         </SliderContainer>
//         <SliderPrevButton className='absolute top-[50%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
//           <ChevronLeft className='w-8 h-8' />
//         </SliderPrevButton>
//         <SliderNextButton className='absolute right-4 p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20'>
//           <ChevronRight className='w-8 h-8' />
//         </SliderNextButton>
//         <div className='flex justify-center py-2'>
//           <SliderDotButton />
//         </div>
//       </Carousel>
//     </>
//   );
// }

// export default DefaultSlider;


// 'use client';

// import React from 'react';
// import { EmblaOptionsType } from 'embla-carousel';
// import Carousel, {
//   Slider,
//   SliderContainer,
//   SliderDotButton,
//   SliderNextButton,
//   SliderPrevButton,
// } from "@/components/ui/Carousel";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const videoData = [
//   {
//     title: 'BGMI Abrams shot',
//     src: '/videos/bgmi.mp4', // Replace with actual path
//   },
//   {
//     title: 'COD Epic kill',
//     src: '/videos/cod.mp4',
//   },
//   {
//     title: 'Valorant Headshot',
//     src: '/videos/valorant.mp4',
//   },
// ];

// function DefaultSlider() {
//   const OPTIONS: EmblaOptionsType = { loop: false };

//   return (
//     <div className="relative w-[70%] mx-auto rounded-2xl bg-black/30 backdrop-blur-xl p-6 shadow-xl">
//       <h2 className="text-center text-white text-3xl font-bold mb-4">BGMI</h2>

//       <Carousel options={OPTIONS}>
//         <SliderContainer>
//           {videoData.map((video, index) => (
//             <Slider key={index} className="w-full flex justify-center">
//               <div className="w-full rounded-xl overflow-hidden relative">
//                 <video
//                   src={video.src}
//                   controls
//                   className="w-full h-auto rounded-xl object-cover"
//                 />
//                 <p className="text-center text-white mt-4 text-lg font-semibold">
//                   {video.title}
//                 </p>
//               </div>
//             </Slider>
//           ))}
//         </SliderContainer>

//         {/* Navigation Buttons */}
//         {/* <SliderPrevButton className="absolute left-4 top-1/2 -translate-y-1/2 p-2 border-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30">
//           <ChevronLeft className="w-6 h-6" />
//         </SliderPrevButton>

//         <SliderNextButton className="absolute right-4 top-1/2 -translate-y-1/2 p-2 border-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30">
//           <ChevronRight className="w-6 h-6" />
//         </SliderNextButton> */}

// <SliderPrevButton className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 shadow-md transition-all duration-300">
//   <ChevronLeft className="w-5 h-5 text-white" />
// </SliderPrevButton>

// <SliderNextButton className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 shadow-md transition-all duration-300">
//   <ChevronRight className="w-5 h-5 text-white" />
// </SliderNextButton>


//         {/* Dots */}
//         <div className="flex justify-center mt-6 gap-2">
//   {videoData.map((_, i) => (
//     <SliderDotButton
//       key={i}
//       index={i}
//       className="h-3 w-3 rounded-full bg-white/30 hover:bg-white/50 data-[active]:bg-white transition-all duration-300"
//     />
//   ))}
// </div>

//       </Carousel>
//     </div>
//   );
// }

// export default DefaultSlider;

'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from "@/components/ui/Carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videoData = [
  {
    title: 'BGMI Abrams shot',
    src: '/videos/bgmi.mp4', // Replace with actual path
  },
  {
    title: 'COD Epic kill',
    src: '/videos/cod.mp4',
  },
  {
    title: 'Valorant Headshot',
    src: '/videos/valorant.mp4',
  },
];

function DefaultSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };

  return (
<div className="relative w-[90%] mx-auto rounded-2xl bg-white/10 backdrop-blur-md p-10 mt-10 shadow-lg">

  <h2 className="text-center text-white text-3xl font-bold mb-4">BGMI</h2>

  <Carousel options={OPTIONS}>
    <SliderContainer>
      {videoData.map((video, index) => (
        <Slider key={index} className="flex justify-center w-full">
          <div className="w-[70%] rounded-xl overflow-hidden relative">
            <video
              src={video.src}
              controls
              className="w-full h-auto rounded-xl object-cover"
            />
            <p className="text-center text-white mt-4 text-lg font-[roboto] font-semibold">
              {video.title}
            </p>
          </div>
        </Slider>
      ))}
    </SliderContainer>

    {/* Navigation Buttons */}
    <SliderPrevButton className="absolute left-30 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 transition-all duration-300">
      <ChevronLeft className="w-7 h-7 text-white" />
    </SliderPrevButton>

    <SliderNextButton className="absolute right-30 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 transition-all duration-300">
      <ChevronRight className="w-7 h-7 text-white" />
    </SliderNextButton>
  </Carousel>
</div>

  );
}

export default DefaultSlider;