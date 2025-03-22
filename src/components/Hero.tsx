'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <main className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-12 mt-39">
            <h1 className="text-5xl font-medium mb-6 leading-tight text-black">
              <span className="block">Building For</span>
              <span className="block font-bold mt-2">Everyone</span>
            </h1>
            <p className="text-base text-black mb-8 max-w-[500px]">
              Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual. Together, we shape a future where no one is left behind.
            </p>
            <div className="space-x-4">
              <Link href="#" className="bg-white text-black px-6 py-3 rounded-lg border border-black text-xxl font-normal hover:bg-gray-100 transition-colors duration-300">
                Learn More
              </Link>
              <Link href="#" className="bg-[#2B9348] text-white px-6 py-3 rounded-lg text-xl font-normal hover:bg-[#228B22] transition-colors duration-300">
                Donate
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Absolute Positioning */}
          <div className="hidden lg:block w-1/2 absolute right-0 top-24 h-[700px]">
            <Image 
              src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-1_gje7xv.png"
              alt="Community member 1"
              width={250}
              height={250}
              className="absolute rounded-full object-cover float-animation"
              style={{ left: '0px', top: '30px', animationDelay: '0s' }}
            />
            <Image 
              src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629607/hero-image-2_clh3ab.png"
              alt="Community member 2"
              width={200}
              height={200}
              className="absolute rounded-full object-cover float-animation"
              style={{ left: '263px', top: '0px', animationDelay: '0.5s' }}
            />
            <Image 
              src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-3_dffvi8.png"
              alt="Community member 3"
              width={200}
              height={200}
              className="absolute rounded-full object-cover float-animation"
              style={{ left: '406px', top: '180px', animationDelay: '1s' }}
            />
            <Image 
              src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-4_aqciwx.png"
              alt="Community member 4"
              width={250}
              height={250}
              className="absolute rounded-full object-cover float-animation"
              style={{ left: '118px', top: '267px', animationDelay: '1.5s' }}
            />
          </div>

          {/* Mobile/Tablet Layout - Grid */}
          <div className="lg:hidden w-full mt-16 relative flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <Image 
                src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-1_gje7xv.png"
                alt="Community member 1"
                width={150}
                height={150}
                className="rounded-full object-cover float-animation"
                style={{ animationDelay: '0s' }}
              />
            </div>
            <div className="w-1/2 p-1">
              <Image 
                src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629607/hero-image-2_clh3ab.png"
                alt="Community member 2"
                width={180}
                height={180}
                className="rounded-full object-cover float-animation"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
            <div className="w-1/2 p-1">
              <Image 
                src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-3_dffvi8.png"
                alt="Community member 3"
                width={180}
                height={180}
                className="rounded-full object-cover float-animation"
                style={{ animationDelay: '1s' }}
              />
            </div>
            <div className="w-1/2 p-1">
              <Image 
                src="https://res.cloudinary.com/djt0sncef/image/upload/v1742629608/hero-image-4_aqciwx.png"
                alt="Community member 4"
                width={150}
                height={150}
                className="rounded-full object-cover float-animation"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
