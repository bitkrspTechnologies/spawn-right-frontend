// 'use client'
// import { useEffect, useState } from 'react';
// import AdCarousel from './AdCarousel';

// export default function AdSection() {
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//       }, []);
    
//       if (!isClient) return null;
//   return (
//     <div className="flex flex-wrap gap-5 min-h-[200px] mb-8 px-4">
//     <div className="w-full sm:w-1/2 lg:w-1/3">
//       <AdSection />
//     </div>
//   </div>
  
//   );
// }
'use client';

import AdCarousel from './AdCarousel';

export default function AdSection() {
  return (
    <div className="w-1/2 min-w-[300px] max-w-full">
      <AdCarousel />
    </div>
  );
}
