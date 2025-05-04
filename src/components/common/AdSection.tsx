'use client'
import { useEffect, useState } from 'react';
import AdCarousel from './AdCarousel';

export default function AdSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) return null;
  return (
    <div className="mt-5">
      <AdCarousel />
    </div>
  );
}
