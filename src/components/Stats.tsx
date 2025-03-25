'use client';

import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: string;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/,/g, ''));
    const duration = 2000;
    const timer = setInterval(() => {
      start += end / (duration / 16);
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <div className="container mx-auto px-4 mt-12 lg:mt-50 mb-20">
      <div className="md:flex md:flex-row justify-between items-center bg-white max-w-5xl mx-auto">
        {/* Mobile Layout - First Row */}
        <div className="grid grid-cols-3 gap-2 items-center mb-8 md:hidden">
          <div className="flex flex-col items-center p-4 col-span-1">
            <p className="text-2xl font-medium mb-2 text-black">₦<AnimatedNumber value="500000" />+</p>
            <p className="text-sm text-[#4B4B4B]">Fund Raised</p>
          </div>
          
          <div className="w-3 h-3 bg-[#F9A602] rounded-full justify-self-center"></div>
          
          <div className="flex flex-col items-center p-4 col-span-1">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="50" />+</p>
            <p className="text-sm text-[#4B4B4B]">Volunteers</p>
          </div>
        </div>

        {/* Mobile Layout - Second Row */}
        <div className="grid grid-cols-3 gap-2 items-center md:hidden">
          <div className="flex flex-col items-center p-4 col-span-1">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="100" /></p>
            <p className="text-sm text-[#4B4B4B]">Scholarships</p>
          </div>
          
          <div className="w-3 h-3 bg-[#F9A602] rounded-full justify-self-center"></div>
          
          <div className="flex flex-col items-center p-4 col-span-1">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="24" /></p>
            <p className="text-sm text-[#4B4B4B]">Workshops</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:w-full">
          <div className="flex flex-col items-center p-4">
            <p className="text-2xl font-medium mb-2 text-black">₦<AnimatedNumber value="600000" />+</p>
            <p className="text-base text-[#4B4B4B]">Fund Raised</p>
          </div>

          <div className="w-3 h-3 bg-[#F9A602] rounded-full"></div>
          
          {/* <div className="flex flex-col items-center p-4">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="50" />+</p>
            <p className="text-base text-[#4B4B4B]">Volunteers</p>
          </div> */}

          {/* <div className="w-3 h-3 bg-[#F9A602] rounded-full"></div> */}
          
          <div className="flex flex-col items-center p-4">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="14" /></p>
            <p className="text-base text-[#4B4B4B]">Scholarships</p>
          </div>

          <div className="w-3 h-3 bg-[#F9A602] rounded-full"></div>
          
          <div className="flex flex-col items-center p-4">
            <p className="text-2xl font-medium mb-2 text-black"><AnimatedNumber value="10" /></p>
            <p className="text-base text-[#4B4B4B]">Workshops</p>
          </div>
        </div>
      </div>
    </div>
  );
}
