
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
//     {
//         title: 'Bgmi Live Match',
//         type: 'youtube',
//         src: 'https://www.youtube.com/embed/E3pJV16STvo?si=fV2eejoduBusjmVH',
//       },
//     {
//       title: 'BGMI Luffy shot',
//       type: 'youtube',
//       src: 'https://www.youtube.com/embed/R-HG7__GW_g?si=yWHL02xuG2_znQeB',
//     },
//     {
//       title: 'COD Epic kill',
//       type: 'local',
//       src: '/videos/cod.mp4',
//     },
    
//   ];
// function DefaultSlider() {
//   const OPTIONS: EmblaOptionsType = { loop: false };

//   return (
// <div className="relative w-[90%] mx-auto rounded-2xl bg-white/10 backdrop-blur-md p-6 mt-10 shadow-lg">

//   <h2 className="text-center text-white text-3xl font-bold mb-4">BGMI</h2>

//   <Carousel options={OPTIONS}>
//     <SliderContainer>
//       {videoData.map((video, index) => (
//         <Slider key={index} className="flex justify-center w-full">
//           <div className="w-[70%] rounded-xl overflow-hidden relative">
//           {video.type === 'local' ? (
//                   <video
//                     src={video.src}
//                     controls
//                     className="w-full h-[400px] rounded-xl object-cover"
//                   />
//                 ) : (
//                   <iframe
//                     src={video.src}
//                     className="w-full h-[350px] rounded-xl"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 )}
//             <p className="text-center text-white mt-4 text-lg font-[roboto] font-semibold">
//               {video.title}
//             </p>
//           </div>
//         </Slider>
//       ))}
//     </SliderContainer>

//     {/* Navigation Buttons */}
//     <SliderPrevButton className="absolute left-28 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 transition-all duration-300">
//       <ChevronLeft className="w-7 h-7 text-white" />
//     </SliderPrevButton>

//     <SliderNextButton className="absolute right-28 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 transition-all duration-300">
//       <ChevronRight className="w-7 h-7 text-white" />
//     </SliderNextButton>
//   </Carousel>
// </div>

//   );
// }

// export default DefaultSlider;

'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderNextButton,
  SliderPrevButton,
} from "@/components/ui/Carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videoData = [
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/DWX6z4f2BTQ?si=dSiKKGEqg4rVKq1W',
  },
  // {
  //   title: 'BGMI Luffy shot',
  //   type: 'youtube',
  //   src: 'https://www.youtube.com/embed/R-HG7__GW_g?si=yWHL02xuG2_znQeB',
  // },
  // {
  //   title: 'COD Epic kill',
  //   type: 'local',
  //   src: '/videos/cod.mp4',
  // },
];

function DefaultSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };

  return (
    <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6 mt-6 sm:mt-10 shadow-lg">
      <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-4">
        Premiers
      </h2>

      <Carousel options={OPTIONS}>
        <SliderContainer>
          {videoData.map((video, index) => (
            <Slider key={index} className="flex justify-center w-full">
              <div className="w-full sm:w-[70%] rounded-xl overflow-hidden relative">
                {video.type === 'local' ? (
                  <video
                    src={video.src}
                    controls
                    className="w-full h-[200px] sm:h-[400px] rounded-xl object-cover"
                  />
                ) : (
                  <iframe
                    src={`${video.src}?rel=0`}
                    className="w-full h-[200px] sm:h-[350px] rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {/* <p className="text-center text-white mt-3 sm:mt-4 text-base sm:text-lg font-roboto font-semibold">
                  {video.title || ''}
                </p> */}
              </div>
            </Slider>
          ))}
        </SliderContainer>

        {/* Navigation Buttons */}
        <SliderPrevButton className="absolute left-4 sm:left-20 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/40 rounded-full hover:bg-gray-900/60 transition-all duration-300">
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
        </SliderPrevButton>

        <SliderNextButton className="absolute right-4 sm:right-20 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/40 rounded-full hover:bg-gray-900/60 transition-all duration-300">
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
        </SliderNextButton>
      </Carousel>
    </div>
  );
}

export default DefaultSlider;