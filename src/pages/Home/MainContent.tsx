'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Carousel from '@/components/common/Carousel';
// import AdSection from '@/components/common/AdSection';

// export default function MainContent() {
//   return (
//     <div className="relative h-screen w-full">
//       {/* Main Layout */}
//       <div className="flex pt-8 h-full overflow-y-auto ">
//         {/* Left Sidebar */}
//         <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-48 left-5 z-10 p-4">
//           {/* Left Sidebar content */}
//           <div className="text-white">

//           </div>
//         </div>

//         {/* Scrollable Main Content */}
//         <div className="flex-1 ml-[110px] mr-[110px] overflow-y-auto px-6 pt-0 min-h-screen">
//           <div className="w-full h-[150px]">
//             <Image
//               src="/images/banner.svg" // your SVG gradient path
//               alt="Gradient Banner"
//               width={1920}
//               height={150}
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="-mt-12"> 
//             <Carousel />
//           </div>
         
//          <div className='flex gap-5 min-h-[200px]'>
//          <AdSection />
//          <AdSection />
//          </div>         
//          <div className='flex gap-5 min-h-[200px]'>
//          <AdSection />
//          <AdSection />
//          </div>   
//         </div>

        

//         {/* Right Sidebar */}
//         <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-48 right-5 z-10 p-4">
//           {/* Right Sidebar content */}
//           <div className="text-white">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/common/Carousel';
import AdSection from '@/components/common/AdSection';

export default function MainContent() {
  return (
    <div className="relative h-screen w-full">
      {/* Main Layout */}
      <div className="flex pt-8 h-full overflow-y-auto ">
        {/* Left Sidebar */}
        <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-48 left-5 z-10 p-4">
          {/* Left Sidebar content */}
          <div className="text-white">
            {/* Add content here */}
          </div>
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 ml-[110px] mr-[110px] overflow-y-auto px-6 pt-0 min-h-screen glassmorphism">
          <div className="w-full h-[150px]">
            <Image
              src="/images/banner.svg" // your SVG gradient path
              alt="Gradient Banner"
              width={1920}
              height={150}
              className="object-cover"
              priority
            />
          </div>
          <div className="-mt-12"> 
            <Carousel />
          </div>
         
          <div className='flex gap-5 min-h-[200px]'>
            <AdSection />
            <AdSection />
          </div>         
          <div className='flex gap-5 min-h-[200px]'>
            <AdSection />
            <AdSection />
          </div>   
        </div>

        {/* Right Sidebar */}
        <div className="w-[100px] bg-gray-400 h-[calc(100vh-260px)] fixed top-48 right-5 z-10 p-4">
          {/* Right Sidebar content */}
          <div className="text-white">
            {/* Add content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
